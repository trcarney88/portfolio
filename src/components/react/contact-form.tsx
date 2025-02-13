import { useEffect, useState } from "react";

export interface ContactFormProps {
  stage: string;
}
export function ContactForm(props: ContactFormProps) {
  const defaultButtonText = "Let's talk";

  const [firstName, setFristName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [alertMessage, setAlertMessage] = useState("");
  const [alertColor, setAlertColor] = useState("text-primary");

  const [buttonText, setButtonText] = useState(defaultButtonText);

  useEffect(() => {}, [alertMessage, buttonText]);
  return (
    <div className="px-6 py-12 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-300 sm:text-5xl">
          Contact
        </h2>
        <p className="mt-2 text-lg/8 text-gray-500 text-pretty">
          Shoot me a message. I would love to hear from you.
        </p>
      </div>
      <fieldset className="mx-auto mt-4 max-w-xl sm:mt-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm/6 font-semibold text-gray-300"
            >
              First name
            </label>
            <div className="mt-2.5">
              <input
                id="first-name"
                name="first-name"
                type="text"
                value={firstName}
                onChange={(e) => setFristName(e.target.value)}
                autoComplete="given-name"
                className="block w-full rounded-md bg-gray-800 px-3.5 py-2 text-base text-gray-300 outline-1 -outline-offset-1 outline-gray-600 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="last-name"
              className="block text-sm/6 font-semibold text-gray-300"
            >
              Last name
            </label>
            <div className="mt-2.5">
              <input
                id="last-name"
                name="last-name"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                autoComplete="family-name"
                className="block w-full rounded-md bg-gray-800 px-3.5 py-2 text-base text-gray-300 outline-1 -outline-offset-1 outline-gray-600 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm/6 font-semibold text-gray-300"
            >
              Email
            </label>
            <div className="mt-2.5">
              <input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                className="block w-full rounded-md bg-gray-800 px-3.5 py-2 text-base text-gray-300 outline-1 -outline-offset-1 outline-gray-600 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm/6 font-semibold text-gray-300"
            >
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                className="block w-full rounded-md bg-gray-800 px-3.5 py-2 text-base text-gray-300 outline-1 -outline-offset-1 outline-gray-600 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary"
                defaultValue={""}
              />
            </div>
          </div>
        </div>
        <div className="p-4 text-center">
          <p className={"text-sm " + alertColor}>{alertMessage}</p>
        </div>
        <div className="mt-6">
          <button
            onClick={async () => {
              setButtonText("Sending email...");
              const success = await contactFormSubmit(
                props.stage,
                firstName,
                lastName,
                email,
                message,
              );
              if (!success) {
                setButtonText("Try Again");
                setAlertMessage("An error occurred sending the contact email");
                setAlertColor("text-action");
              } else {
                setAlertMessage(
                  "Email sent, thanks for reaching out. I will get back to you shortly",
                );
                setAlertColor("text-primary");
                setButtonText(defaultButtonText);
              }
            }}
            className="block w-full rounded-md bg-primary px-3.5 py-2.5 text-center text-sm font-semibold text-gray-300 shadow-xs hover:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            {buttonText}
          </button>
        </div>
      </fieldset>
    </div>
  );
}

async function contactFormSubmit(
  stage: string,
  firstName: string,
  lastName: string,
  email: string,
  message: string,
): Promise<boolean> {
  console.log("sending email to api");
  let baseurl = "https://api.trcarney.com/";
  if (stage !== "prod") {
    baseurl += "dev/";
  }

  const url = baseurl + "contact";

  const resp = await fetch(url, {
    method: "POST",
    body: JSON.stringify({
      firstName,
      lastName,
      email,
      message,
    }),
  });

  return resp.status === 200;
}
