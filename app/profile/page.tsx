import React, { useState } from "react";
import bg from "../../public/food-photography-session.webp";
import { PageComponent, PageLayout, ProfileForm } from "../(components)";
import { HeaderText } from "../(components)/UI";

const AuthPage = () => {
  return (
    <div className="page-style">
      <PageLayout text="Profile">
        <div
          className="bg-dflt"
          style={{
            backgroundImage: `url(${bg.src})`,
          }}
        />
      </PageLayout>
      <PageComponent>
        <div className="border-container relative flex flex-col px-6 md:px-12 lg:px-6 xl:px-16 2xl:px-24 pt-20">
          <HeaderText className="text-center text-about-info-main tracking-wider">
            Profile
          </HeaderText>
          <ProfileForm />
        </div>
      </PageComponent>
    </div>
  );
};

export default AuthPage;
