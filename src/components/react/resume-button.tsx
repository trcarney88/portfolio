import { DocumentArrowDownIcon } from "@heroicons/react/24/outline";

export const ResumeButton = () => {
  return (
    <a href="/resume.pdf" target="_blank">
      <DocumentArrowDownIcon
        aria-hidden="true"
        className="size-10 stroke-primary"
      />
    </a>
  );
};
