
import { useNavigate } from "react-router-dom";

export const TemplateCard = ({ template }) => {
  const navigate = useNavigate();

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
      {/* Template preview */}
      <div className="bg-gray-100 p-5">
        <div className="mx-auto aspect-[3/4] max-w-[300px] overflow-hidden bg-white shadow">
          <div className="origin-top-left scale-[0.85]">
            <template.Component />
          </div>
        </div>
      </div>

      {/* Details */}
      <div className="p-5">
        <h2 className="text-xl font-semibold">
          {template.name}
        </h2>

        <p className="mt-2 text-sm text-gray-600">
          {template.description}
        </p>

        <div className="mt-5 flex gap-3">
          <button
            onClick={() =>
              navigate(`/create-invoice?template=${template.id}&preview=true`)
            }
            className="flex-1 rounded-lg border px-4 py-2"
          >
            Preview
          </button>

          <button
            onClick={() =>
              navigate(`/create-invoice?template=${template.id}`)
            }
            className="flex-1 rounded-lg bg-blue-700 px-4 py-2 text-white"
          >
            Use Template
          </button>
        </div>
      </div>
    </div>
  );
};
