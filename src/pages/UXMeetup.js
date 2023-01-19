import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/uxmeetup.css";
import UXLanding from "../component/UXLanding";
import About from "../component/About";
import UXLayout from "../layouts/UXLayout";
import Community from "../component/Community.js";
import uxmeetup from "../json/uxmeetup.json";
import Venue from "../component/Venue";

export default function UXMeetup() {
  return (
    <>
      <UXLayout title="UX Meetup | SemiKolan">
        <UXLanding
          lottiename="uxmeetup"
          redirect="#ux-meetup"
          p1="Bringing to you the Bhopal’s first ever UX meetup!"
          p2="Bhopal UX Meetup"
          p3="On 28th Feb 2023"
          buttontext="Register Now"
        />

        <About
          num="01."
          titleline="About"
          content={uxmeetup.about.content}
          removeViewMore
        />

        <Community num="03." Community={uxmeetup.community.slice(0, 4)} />

        <Venue num="04." />
      </UXLayout>
    </>
  );
}
