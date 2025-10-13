import { changelogEntries } from "../data/changelog";
import "./ChangelogModal.css";

type ChangelogModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const ChangelogModal = ({ isOpen, onClose }: ChangelogModalProps) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="changelog-overlay" onClick={onClose}>
      <div
        id="changelog-modal"
        className="changelog-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="changelog-title"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="changelog-modal__header">
          <h2 id="changelog-title">Changelog</h2>
          <button
            type="button"
            className="changelog-close-button"
            onClick={onClose}
            aria-label="Close changelog"
          >
            ×
          </button>
        </div>
        <div className="changelog-modal__content">
          {changelogEntries.length > 0 ? (
            <ul className="changelog-list">
              {changelogEntries.map((entry) => (
                <li key={`${entry.version}-${entry.date}`}>
                  <article>
                    <header className="changelog-entry-header">
                      <span className="changelog-version">{entry.version}</span>
                      <span className="changelog-date">{entry.date}</span>
                    </header>
                    <ul className="changelog-entry-body">
                      {entry.changes.map((change, index) => (
                        <li key={index}>{change}</li>
                      ))}
                    </ul>
                  </article>
                </li>
              ))}
            </ul>
          ) : (
            <p className="changelog-status">No changelog entries available.</p>
          )}
        </div>
      </div>
    </div>
  );
};
