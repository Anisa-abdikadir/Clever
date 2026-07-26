export default function StepCard({ step }) {
  return (
    <div className="bg-white  rounded-3xl p-8 shadow-sm hover:shadow-xl duration-300">

      <img
        src={step.image}
        alt={step.title}
        className="w-full h-56 object-cover rounded-2xl"
      />

      <h3 className="text-2xl font-bold mt-8 text-center">
        {step.title}
      </h3>

      <p className="text-gray-500 text-center mt-4 leading-7">
        {step.description}
      </p>

    </div>
  );
}