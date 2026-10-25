
import BusinessTemplate from "../Components/Templates/BusinessTemplate";
import ClassicTemplate from "../Components/Templates/ClassicTemplate";
import CreativeTemplate from "../Components/Templates/CreativeTemplate";
import ElegantTemplate from "../Components/Templates/ElegantTemplate";
import MinimalTemplate from "../Components/Templates/MinimalTemplate";
import ModernTemplate from "../Components/Templates/ModernTemplate";

export const templates = [
  {
    id: "modern",
    name: "Modern",
    description: "Clean layout with blue accents.",
    Component: ModernTemplate,
  },
  {
    id: "classic",
    name: "Classic",
    description: "Traditional professional invoice.",
    Component: ClassicTemplate,
  },
  {
    id: "minimal",
    name: "Minimal",
    description: "Simple and clean invoice.",
    Component: MinimalTemplate,
  },
  {
    id: "business",
    name: "Business",
    description: "Corporate invoice design.",
    Component: BusinessTemplate,
  },
  {
    id: "creative",
    name: "Creative",
    description: "Creative invoice layout.",
    Component: CreativeTemplate,
  },
  {
    id: "elegant",
    name: "Elegant",
    description: "Elegant typography and styling.",
    Component: ElegantTemplate,
  },
];