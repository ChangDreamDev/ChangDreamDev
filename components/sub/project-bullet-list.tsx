type BulletItem = {
  label: string;
  value: string;
};

type ProjectBulletListProps = {
  items: BulletItem[];
  className?: string;
};

export const ProjectBulletList = ({
  items,
  className = "",
}: ProjectBulletListProps) => {
  return (
    <ul className={`mt-2 space-y-2 text-sm text-gray-300 ${className}`}>
      {items.map((item, index) => (
        <li key={`${item.label}-${index}`} className="flex items-start gap-2.5">
          <span
            aria-hidden
            className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-purple-400"
          />
          <span>
            <span className="font-medium text-gray-200">{item.label}</span>{" "}
            {item.value}
          </span>
        </li>
      ))}
    </ul>
  );
};
