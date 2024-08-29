import Link from "next/link";
import CompanyValue from "./components/companyValue/companyValue";
import RecommendProduct from "./(routes)/products/[productSlug]/Components/recommendProduct";

export default function NotFound() {
  return (
    <div className="relative">
      <div className="flex items-center justify-center min-h-[50vh] gap-3 ">
        <div className="flex flex-col gap-4 container-margin-compact">
          <p className="text-4xl font-semibold text-center text-primary-green-300">
            404 Page Not Found
          </p>
          <p className="mt-2 font-medium text-center uppercase text-black-shade-200">
            The page you are looking for cannot be found.
          </p>
          <Link
            className="font-medium text-center text-primary-green-200"
            href="/"
          >
            GO TO HOME
          </Link>
        </div>
      </div>
      <CompanyValue margin={false} />
      <RecommendProduct bestSellers={true} />
    </div>
  );
}
