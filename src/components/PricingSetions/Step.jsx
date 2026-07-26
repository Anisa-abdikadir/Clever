import StepCard from "./StepCard";
import Button from "../Button";

const steps = [
  {
    id: 1,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVnu9O1zZI-oZrnQetcn_XjWz91N4XDC4VeAlrojsVuKl0Z0dj",
    title: "Submit Your Details",
    description:
      "Provide your information through our secure registration form.",
  },
  {
    id: 2,
    image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR-mnAGodzfRlGlZN3dFOxIWEtR0k9e5evYPBrIP-5AFqAKAfO1",
    title: "Receive Access",
    description:
      "Get instant access to early features and updates.",
  },
  {
    id: 3,
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnkLeoZRK8Er22rn3ze3okLX7U856eX3pmkIXzeyGEOR63_Nev",
    title: "Start Using Clever",
    description:
      "Enjoy all platform features after your account is approved.",
  },
];

export default function Steps() {
  return (
    <section className="py-24 bg-white ">
      <div className="max-w-7xl mx-auto px-6 ">

        <div className="text-center">
           <Button
              size="lg"rounded="full" variant="third"
              className="cursor-pointer ">Process</Button>

          <h2 className="sm:text-5xl text-xl font-bold mt-6">
            Getting Started Steps
          </h2>

          <p className="text-gray-500 mt-4 sm:max-w-xl max-w-sm mx-auto">
            Follow our simple steps to get started quickly and unlock all
            Clever features.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {steps.map((step) => (
            <StepCard key={step.id} step={step} />
          ))}
        </div>

      </div>
    </section>
  );
}