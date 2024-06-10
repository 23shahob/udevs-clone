import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import TelegramIcon from "@mui/icons-material/Telegram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

const Contact = () => {
  return (
    <div id="contact" className="py-20">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-20 text-[64px] font-extrabold leading-[64px] text-[#1b5bf7]">
          Contact us
        </h1>
        <div className="boxshadow px-24 pb-20 pt-10">
          <p className="mb-5 text-xl font-semibold leading-[30px] text-[#0f001a]">
            Leave us a message
          </p>
          <div className="flex gap-12">
            <div className="w-[50%]">
              <form action="">
                <input
                  placeholder="Name"
                  type="text"
                  required
                  className="mb-5 h-14 w-full rounded-md border border-[#B4BEC8] p-3 outline-none"
                />
                <input
                  placeholder="Your email"
                  required
                  type="email"
                  className="mb-5 h-14 w-full rounded-md border border-[#B4BEC8] p-3 outline-none"
                />
                <input
                  type="text"
                  placeholder="Briefly describe your project"
                  className="mb-6 h-24 w-full rounded-md border border-[#B4BEC8] p-3 outline-none"
                />
                <button className="h-11 w-60 rounded-md bg-[#1b5bf7] text-xl font-semibold leading-6 text-white outline-none transition duration-300 hover:scale-[1.07]">
                  Send
                </button>
              </form>
            </div>
            <div className="w-[50%]">
              <div className="mb-5 flex items-center gap-2">
                <LocationOnIcon className="text-[#1b5bf7]" />
                <p className="leading-[22px] text-[#0f001a]">
                  Tashkent, Mirzo Ulug'bek tumani, 5-qo'rg'on 32{" "}
                </p>
              </div>
              <div className="mb-5 flex items-center gap-2">
                <PhoneIcon className="text-[#1b5bf7]" />
                <p className="leading-[22px] text-[#0f001a]">
                  +998 33 660 09 99
                </p>
              </div>
              <div className="mb-5 flex items-center gap-2">
                <MailOutlineIcon className="text-[#1b5bf7]" />
                <p className="leading-[22px] text-[#0f001a]">
                  azizbek.b@udevs.io
                </p>
              </div>
              <div className="mb-5 flex items-center gap-2">
                <TelegramIcon className="text-[#1b5bf7]" />
                <p className="font-bold leading-[22px] text-[#1b5bf7]">
                  t.me/azizbekbakhodirov
                </p>
              </div>
              <div className="mb-5 flex gap-3">
                <YouTubeIcon className="h-6 w-6 text-[#1b5bf7]" />
                <InstagramIcon className="h-6 w-6 text-[#1b5bf7]" />
                <FacebookIcon className="h-6 w-6 text-[#1b5bf7]" />
                <TwitterIcon className="h-6 w-6 text-[#1b5bf7]" />
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.1561263856715!2d69.33484177557602!3d41.348960098378676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8dbb8e1f0391%3A0xd04770323fe890a5!2sUdevs!5e0!3m2!1sru!2s!4v1718028148356!5m2!1sru!2s"
                className="h-[250px] w-full border-none"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
