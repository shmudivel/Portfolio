import React from "react";

import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/411cb0e6-d2a9-4e11-9db8-71331b8ac91d"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-2 border-[#26ddcd] text-gray-300">
            {t("Contact")}
          </p>
          <p className="text-gray-300 py-4">
            {" "}
            {t("Submit the form below or shoot me an email")} -
            shmudivel@gmail.com
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] rounded-sm p-2"
          type="text"
          placeholder={t("Name")}
          name="name"
        />
        <input
          className="my-4 p-2  rounded-sm  bg-[#ccd6f6]"
          type="email"
          placeholder={t("Email")}
          name="email"
        />
        <textarea
          className="bg-[#ccd6f6] rounded-sm p-2"
          name="message"
          rows="10"
          placeholder={t("Message")}
        ></textarea>
        <button className="text-white rounded-sm border-2 hover:bg-[#26ddcd] hover:border-[#26ddcd] px-4 py-3 my-8 mx-auto flex items-center">
          {t("Send")}
        </button>
      </form>
    </div>
  );
};

export default Contact;
