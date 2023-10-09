export default function Footer() {
  return (
    <div className=" mt-40 w-full bg-white-200 text-center">
      <div className="container mx-auto flex-col md:flex-row flex items-center justify-center">
        <p className="text-gray-600 text-2xl mb-2 me-4 font-logo">CafeNearU</p>
        <p className="text-gray-600 text-sm">
          Copyright © 2023 CaféNearU. All rights reserved.
        </p>
      </div>
      <div
        className=""
        style={{
          width: "100%",
          height: "10px",
          flexShrink: 0,
          background: "#D0B8A8",
        }}
      />
    </div>
  );
}
