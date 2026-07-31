type SectionHeadingProps = {
  title: string;
  body?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  title,
  body,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "section-heading center" : "section-heading"}>
      <h2>{title}</h2>
      {body ? <p>{body}</p> : null}
    </div>
  );
}
