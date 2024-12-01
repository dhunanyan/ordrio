import { Icons } from "@config";

import "./test.scss";

export default function Page() {
  return (
    <main className="test">
      <ul>
        {Object.keys(Icons)
          .filter((key) => key.includes("blue"))
          .map((key) => (
            <li key={key}>
              <h1>{key}</h1>
              <div dangerouslySetInnerHTML={{ __html: Icons[key] }} />
            </li>
          ))}
      </ul>
      <ul>
        {Object.keys(Icons)
          .filter((key) => key.includes("yellow"))
          .map((key) => (
            <li key={key}>
              <h1>{key}</h1>
              <div dangerouslySetInnerHTML={{ __html: Icons[key] }} />
            </li>
          ))}
      </ul>
      <ul>
        {Object.keys(Icons)
          .filter((key) => !key.includes("blue") && !key.includes("yellow"))
          .map((key) => (
            <li key={key}>
              <h1>{key}</h1>
              <div dangerouslySetInnerHTML={{ __html: Icons[key] }} />
            </li>
          ))}
      </ul>
    </main>
  );
}
