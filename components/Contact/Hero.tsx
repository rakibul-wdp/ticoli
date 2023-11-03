"use client";

import { Container, Title } from "@/universal";
import { HeroBg2, Space } from "../common";
import { ContactForm } from "./ContactForm";

export const Hero = () => (
  <HeroBg2
    lowerBg={<Space className="py-[470px] md:py-[75px]" />}
    lineStarePosition="-bottom-64 -left-[80px] lg:bottom-32"
    coloredShapePosition="w-[400px] md:w-[620px] lg:w-[740px] -bottom-40 -right-[85px] md:-bottom-[250px] md:-right-[150px] lg:-bottom-[280px] lg:-right-[170px]"
  >
    <div className="px-6">
      <Title variant="H1" color="surface" className="text-center pt-[100px]">
        Get in touch!
      </Title>

      <ContactForm />
    </div>
  </HeroBg2>
);
