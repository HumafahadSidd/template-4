import GridDefault from "@/components/GridDefault";
import Navbar from "@/components/Navbar.";
import React from "react";
import Image from "next/image";
export default function ShopLeftGrid() {
  return (
    <div>
      <div className="container">
        <div className="grid">
          <GridDefault />
          <Navbar />

          <div className="box border mt-4 shadow-md ml-8 flex gap-4 justify-center">
            <div className="">
              <h4 className="text-indigo-600 text-2xl underline ">
                Product Brand
              </h4>
              <div>
                <ol className=" text-gray-400">
                  <li>Coaster Furniture</li>
                  <li>Coaster Furniture</li>
                  <li>Unique Furnitture Restor</li>
                  <li>Dream Furnitture Flipping</li>
                  <li>Young Repurposed</li>
                  <li>Green DIY furniture</li>
                </ol>
              </div>

              <div className="">
                <div>
                  <Image
                    src={"/p4/Rectangle 32.png"}
                    alt={""}
                    height={250}
                    width={300}
                  />
                </div>
                 
              <div className="flex">
                <h2 className="text-[#111C85] font-semibold text-2xl mt-2">
                  Accumsan tincidunt
                </h2>
                {/* <div className='flex'> */}

                <div className="mt-4">
                  <Image
                    src={"/p3/Ellipse 24.png"}
                    alt={"design1"}
                    height={20}
                    width={20}
                  />
                </div>
                <div className="mt-4">
                  <Image
                    src={"/p3/Ellipse 25.png"}
                    alt={"design1"}
                    height={20}
                    width={20}
                  />
                </div>
                <div className="mt-4">
                  <Image
                    src={"/p3/Ellipse 26.png"}
                    alt={"design1"}
                    height={20}
                    width={20}
                  />
                </div>
              </div>

              <div className="gap-2">
                <p>$26.00</p>
                <p className="text-pink-400">
                  <del>$52.00</del>
                </p>

                <div className="flex gap-2 hover:text-gray-400">
                  <div className="mt-2">
                    <Image
                      src={"/p3/ant-design_star-filled.png"}
                      alt={"design1"}
                      height={20}
                      width={20}
                    />
                  </div>
                  <div className="mt-2">
                    <Image
                      src={"/p3/ant-design_star-filled.png"}
                      alt={"design1"}
                      height={20}
                      width={20}
                    />
                  </div>
                  <div className="mt-2">
                    <Image
                      src={"/p3/ant-design_star-filled.png"}
                      alt={"design1"}
                      height={20}
                      width={20}
                    />
                  </div>
                  <div className="mt-2">
                    <Image
                      src={"/p3/ant-design_star-filled.png"}
                      alt={"design1"}
                      height={20}
                      width={20}
                    />
                  </div>
                  <div className="mt-2">
                    <Image
                      src={"/p3/vector.png"}
                      alt={"design1"}
                      height={20}
                      width={20}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
