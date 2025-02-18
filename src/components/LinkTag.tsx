import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

const LinkTag = ({ name, link }: { name: string; link: string }) => {
  return (
    <li className="mr-4">
      <a
        href={link}
        target="_blank"
        rel="noreferrer noopener"
        className="relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-teal-300 focus-visible:text-teal-300"
        aria-label={`Open ${name} link in a new tab`}
      >
        <FontAwesomeIcon icon={faLink} className="mr-1 h-3 w-3" />
        {name}
      </a>
    </li>
  );
};

export default LinkTag;
