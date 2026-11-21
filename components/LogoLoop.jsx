import Link from "next/link";

export default function LogoLoop({ logos, speed = 38, ariaLabel = "Technology logos" }) {
  const renderLogos = (isDuplicate = false) => (
    <div className="logo-loop-group" role="list" aria-hidden={isDuplicate || undefined}>
      {logos.map(({ node, title, href }) => {
        const logo = (
          <span className="logo-loop-item" key={title} role="listitem">
            <span className="logo-loop-icon" aria-hidden="true">{node}</span>
            <span>{title}</span>
          </span>
        );

        return href ? (
          <Link className="logo-loop-link" href={href} key={title} aria-label={title} tabIndex={isDuplicate ? -1 : undefined}>
            {logo}
          </Link>
        ) : logo;
      })}
    </div>
  );

  return (
    <div className="logo-loop" role="region" aria-label={ariaLabel} style={{ "--logo-loop-duration": `${speed}s` }}>
      <div className="logo-loop-track">
        {renderLogos()}
        {renderLogos(true)}
      </div>
    </div>
  );
}
