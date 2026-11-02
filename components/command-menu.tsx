"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { navItems } from "@/src/data/nav";
import { profile } from "@/src/data/profile";
import { projects } from "@/src/data/projects";

type Command = {
  id: string;
  group: string;
  label: string;
  hint?: string;
  run: () => void | Promise<void>;
};

const openExternal = (href: string) => {
  window.open(href, "_blank", "noopener,noreferrer");
};
const scrollToHash = (hash: string) =>
  document.querySelector(hash)?.scrollIntoView({ behavior: "smooth", block: "start" });

export function CommandMenu() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const [toast, setToast] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const openerRef = useRef<HTMLElement | null>(null);

  const commands = useMemo<Command[]>(
    () => [
      ...navItems.map((item) => ({
        id: `go-${item.href}`,
        group: "Go to",
        label: item.label,
        run: () => scrollToHash(item.href),
      })),
      ...projects.map((project) => ({
        id: `case-${project.id}`,
        group: "Case studies",
        label: project.title,
        hint: project.category,
        run: () => {
          window.dispatchEvent(new CustomEvent("open-case-study", { detail: project.id }));
        },
      })),
      ...projects
        .filter((project) => project.liveDemo)
        .map((project) => ({
          id: `demo-${project.id}`,
          group: "Live demos",
          label: `Open ${project.title}`,
          hint: project.liveDemo!.replace(/^https?:\/\//, ""),
          run: () => openExternal(project.liveDemo!),
        })),
      {
        id: "copy-email",
        group: "Contact",
        label: "Copy email address",
        hint: profile.email,
        run: async () => {
          try {
            await navigator.clipboard.writeText(profile.email);
            setToast("Email copied");
          } catch {
            window.location.href = `mailto:${profile.email}`;
          }
        },
      },
      { id: "resume", group: "Contact", label: "Open resume (PDF)", run: () => openExternal(profile.resumeUrl) },
      ...profile.socials.map((social) => ({
        id: `social-${social.label}`,
        group: "Contact",
        label: `Open ${social.label.charAt(0)}${social.label.slice(1).toLowerCase()}`,
        hint: social.href.replace(/^https?:\/\/(www\.)?/, ""),
        run: () => openExternal(social.href),
      })),
    ],
    [],
  );

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return commands;
    return commands.filter((command) =>
      `${command.group} ${command.label} ${command.hint ?? ""}`.toLowerCase().includes(q),
    );
  }, [commands, query]);

  const show = () => {
    openerRef.current = document.activeElement as HTMLElement | null;
    setQuery("");
    setActiveIndex(0);
    setOpen(true);
  };

  const close = () => {
    setOpen(false);
    openerRef.current?.focus();
  };

  // ⌘K / Ctrl+K anywhere, plus the header button (via a custom event).
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((isOpen) => {
          if (!isOpen) {
            openerRef.current = document.activeElement as HTMLElement | null;
            setQuery("");
            setActiveIndex(0);
          }
          return !isOpen;
        });
      }
    };
    const onOpen = () => show();
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("open-command-menu", onOpen);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("open-command-menu", onOpen);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    inputRef.current?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  useEffect(() => {
    if (!toast) return;
    const timeout = setTimeout(() => setToast(null), 1800);
    return () => clearTimeout(timeout);
  }, [toast]);

  const runCommand = (command: Command) => {
    setOpen(false);
    void command.run();
  };

  const onInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex((index) => Math.min(index + 1, results.length - 1));
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((index) => Math.max(index - 1, 0));
    } else if (event.key === "Enter" && results[activeIndex]) {
      event.preventDefault();
      runCommand(results[activeIndex]);
    } else if (event.key === "Escape") {
      event.preventDefault();
      close();
    }
  };

  let lastGroup = "";

  return (
    <>
      {open ? (
        <div className="cmdk" role="dialog" aria-modal="true" aria-label="Command menu">
          <div className="cmdk__backdrop" onClick={close} aria-hidden="true" />
          <div className="cmdk__panel">
            <div className="cmdk__search">
              <span aria-hidden="true">›</span>
              <input
                ref={inputRef}
                type="text"
                value={query}
                placeholder="Jump to a section, project or link…"
                aria-label="Search commands"
                aria-controls="cmdk-list"
                aria-activedescendant={results[activeIndex] ? `cmdk-${results[activeIndex].id}` : undefined}
                onChange={(event) => {
                  setQuery(event.target.value);
                  setActiveIndex(0);
                }}
                onKeyDown={onInputKeyDown}
              />
              <kbd>Esc</kbd>
            </div>

            <ul id="cmdk-list" className="cmdk__list" role="listbox">
              {results.length === 0 ? (
                <li className="cmdk__empty">No matches. Try “resume”, “demo” or a project name.</li>
              ) : null}
              {results.map((command, index) => {
                const heading = command.group !== lastGroup ? command.group : null;
                lastGroup = command.group;
                return (
                  <li key={command.id} role="presentation">
                    {heading ? <p className="cmdk__group">{heading}</p> : null}
                    <button
                      id={`cmdk-${command.id}`}
                      type="button"
                      role="option"
                      aria-selected={index === activeIndex}
                      className={`cmdk__item${index === activeIndex ? " is-active" : ""}`}
                      onMouseMove={() => setActiveIndex(index)}
                      onClick={() => runCommand(command)}
                    >
                      <span>{command.label}</span>
                      {command.hint ? <small>{command.hint}</small> : null}
                    </button>
                  </li>
                );
              })}
            </ul>

            <p className="cmdk__footer">
              <span>↑↓ to move</span>
              <span>↵ to open</span>
            </p>
          </div>
        </div>
      ) : null}

      {toast ? (
        <p className="cmdk-toast" role="status">
          {toast}
        </p>
      ) : null}
    </>
  );
}
