import {
  FaFilePdf,
  FaBolt,
  FaDownload,
  FaShieldAlt,
  FaThLarge,
  FaClock,
} from "react-icons/fa";

export const Benefits = () => {
    const data = [
  {
    id: 1,
    title: "Beautiful by default",
    icon: FaFilePdf,
    p: "Choose from polished templates designed to make your business look its best.",
  },
  {
    id: 2,
    title: "Create in minutes",
    icon: FaBolt,
    p: "Smart defaults and live calculations make every invoice quick and effortless.",
  },
  {
    id: 3,
    title: "Export anywhere",
    icon: FaDownload,
    p: "Download a PDF, print a copy, or save a draft to finish when you're ready.",
  },
  {
    id: 4,
    title: "Your data, protected",
    icon: FaShieldAlt,
    p: "Drafts stay securely in your browser and remain under your control.",
  },
  {
    id: 5,
    title: "Flexible templates",
    icon: FaThLarge,
    p: "Switch your invoice style at any time without losing a single detail.",
  },
  {
    id: 6,
    title: "Always on time",
    icon: FaClock,
    p: "Clear due dates and payment terms keep every client on the same page.",
  },
];
    return (
        <section className="flex flex-col items-center  bg-gray-100 py-20">
            <p className="font-bold text-blue-600">EVERYTHING YOU NEED</p>
            
            <h1 className="text-5xl mt-5">Invoicing without the busywork</h1>

            <p className="mt-5">Professional tools that make billing simple, from first draft to final payment.</p>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 mx-40 pt-10">
  {data.map((item) => {
    const Icon = item.icon;

    return (
      <div
        key={item.id}
        className="rounded-xl border border-gray-200 bg-white p-6 hover:-translate-y-1 transition duration-500 hover:shadow-lg hover:shadow-gray-300"
      >
        <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50">
          <Icon className="text-xl text-blue-600" />
        </div>

        <p className="mb-3 font-medium">{item.title}</p>

        <p className="text-gray-600">{item.p}</p>
      </div>
    );
  })}
</div>
        </section>
    )
}