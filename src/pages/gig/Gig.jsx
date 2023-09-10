import React from "react";
import { Slider } from "infinite-react-carousel";
import { projects } from "../../data";

const Gig = () => {
  return (
    <div className="container mx-auto py-12 px-16 flex flex-row justify-between gap-x-16">
      {/* Info Section */}
      <div className="basis-2/3">
        {/* BreadCrumb */}
        <div className="flex items-center gap-x-3 mb-4">
          <img
            src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/search_perseus/home-breadcrumb.2ba1681.svg"
            alt=""
          />
          /<span> Graphics & Design</span>
        </div>
        <h1 className="text-3xl font-bold mb-4">
          I will create a super stunning website for your business
        </h1>
        <div className="text-gray-600 mb-8">
          <div className="flex justify-start items-center gap-x-3 ">
            <img
              src="https://images.pexels.com/photos/1771383/pexels-photo-1771383.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
              className="w-6 h-6 rounded-full object-cover"
            />
            <div className="font-bold">Anna Bell</div>
            <div className="font-bold">⭐⭐⭐⭐⭐ 5.0</div>
          </div>
        </div>

        {/* Gigs Images Slider */}
        <div className="Round-Arrow-Dots mb-8">
          <Slider arrows arrowsScroll={1} slidesToShow={1}>
            {projects.map((project) => {
              return <img key={project.id} src={project.img} alt="" />;
            })}
          </Slider>
        </div>

        {/* About the Gig */}
        <div className="mb-12">
          <h3 className="font-bold text-2xl mb-3">About the Gig</h3>
          <span>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure
            soluta magni cumque. Rerum soluta architecto repudiandae beatae eum
            explicabo nemo distinctio perspiciatis molestiae quam laboriosam
            veritatis minima atque dolores itaque cumque fuga, alias
            reprehenderit culpa accusantium! Ea quo ut itaque possimus
            voluptatem quia laborum eum at temporibus iste beatae iusto illum
            autem minima nostrum, nobis corporis fugit maiores ad repellendus
            exercitationem libero vero facilis. Repellendus ullam quo porro
            possimus aperiam autem harum molestiae quam rerum consectetur.
            Nesciunt dolores quod a consequatur neque, architecto pariatur in
            laborum omnis at eaque cumque earum ducimus animi, officiis est!
            Quis architecto vero numquam molestias est voluptate magnam veniam.
            Nulla, autem dolore consequatur tempore dignissimos itaque dolores
            sequi neque quibusdam cupiditate accusantium quas? Aut animi
            mollitia repellat eius amet illo iste ea eaque eum numquam officia
            eveniet, asperiores doloribus dolorum ipsam quam facilis quibusdam
            culpa laudantium iure provident placeat voluptas libero! Eveniet
            modi necessitatibus in pariatur laborum saepe dignissimos ducimus
            sunt beatae quisquam adipisci doloribus tempore, placeat repellat,
            corporis quia?
          </span>
        </div>

        {/* About the seller */}
        <div className="mb-16">
          <h3 className="font-bold text-2xl mb-6">About the seller</h3>
          <div className="flex flex-col mb-10">
            <div className="flex gap-x-6 mb-4">
              <img
                className="rounded-full w-28 h-28"
                src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/87c6aec1e16ccb4e1ba26d9c67b2faad-1645737401230/d39714e0-8cbb-407c-9988-7774310e33f1.JPG"
                alt=""
              />
              <div className="flex flex-col gap-y-1 justify-center">
                <div className="font-bold text-xl">
                  Evelin{" "}
                  <span className="font-normal text-base text-gray-500">
                    @eeveliin
                  </span>
                </div>
                <span>Professional Graphic Designer</span>
                <div className="font-bold">
                  ⭐ 4.9 <span className="font-normal">(408)</span>
                </div>
              </div>
            </div>
            <button className="p-2 w-max px-6 border rounded-md border-gray-400 font-bold text-gray-500">
              Contact Me
            </button>
          </div>
          <div className="border rounded-md text-zinc-500 p-6 border-gray-300">
            <div className="grid grid-cols-2 gap-y-6  border-b pb-6 border-gray-300">
              <div>
                From
                <div className="font-bold ">Hungary</div>
              </div>
              <div>
                Member since
                <div className="font-bold ">Mar 2018</div>
              </div>
              <div>
                Avg. response time
                <div className="font-bold ">1 hour</div>
              </div>
              <div>
                Last delivery
                <div className="font-bold ">about 23 hours</div>
              </div>
              <div>
                Languages
                <div className="font-bold ">English, Hungarian, Danish</div>
              </div>
            </div>
            <div className="pt-4">
              Obsessed with minimalistic nordic style, in any kind of artwork.
              It can be furnitures, interior but mostly advertisement designs,
              logos and branding. Would love to do more that i love; the simple,
              but meaningful and powerful creations
            </div>
          </div>
        </div>

        {/* Reviews */}
        <div className="mb-6">
          <h3 className="font-bold text-2xl mb-6">Reviews</h3>
          <div className="flex flex-col gap-y-7">
            <div className="flex flex-col gap-y-2 border-b pb-6 border-zinc-200">
              <div className="flex justify-start items-center gap-x-5 bg-white">
                <img
                  src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/87c6aec1e16ccb4e1ba26d9c67b2faad-1645737401230/d39714e0-8cbb-407c-9988-7774310e33f1.JPG"
                  alt=""
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="font-bold">
                  Anna Bells
                  <div className="font-normal text-sm">United States</div>
                </div>
              </div>
              <div className="font-bold mb-2">⭐⭐⭐⭐⭐ 5.0</div>
              <div className="text-zinc-800 mb-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                saepe quos animi dolore ex, repellat tempore ullam fugit
                perspiciatis, dolor modi. Repellendus deleniti, tempore vero
                harum dolor voluptates quos placeat, minima quo ad ullam
                praesentium error similique nobis perspiciatis ex nemo eum rem
                at labore beatae. Fuga est beatae vitae dolorem omnis mollitia
                labore sequi eveniet soluta! Maiores nisi obcaecati dolorum
                possimus enim eius tempora. Corporis at quibusdam doloremque
                rerum laboriosam animi quis pariatur facilis rem, sint,
                recusandae, dolores voluptate eius minima accusantium provident
                natus mollitia quod. Modi cum quibusdam expedita dicta ex
                voluptatem ullam! Ratione et exercitationem magnam omnis.
              </div>
              <div className="flex font-bold items-center gap-x-4">
                <span className="">Helpful?</span>
                <div className="cursor-pointer">👍 Yes</div>
                <div className="cursor-pointer">👎 No</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="basis-1/3">
        <div className="border border-zinc-300 rounded-md p-6 flex flex-col gap-y-4 sticky top-40 shadow-2xl">
          <div className="flex justify-between gap-x-4">
            <div className="font-bold break-all">1 AI Generated Image</div>
            <div className="text-green-500 text-xl font-bold">$ 58.99</div>
          </div>
          <span>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            architecto blanditiis eos quibusdam officia delectus suscipit rerum.
            Consequuntur, minima recusandae?
          </span>
          <div className="flex justify-between font-bold">
            <div>⏲️ 2 days delivery</div>
            <div>♻️ 3 revisions</div>
          </div>
          <div className="flex flex-col gap-y-1">
            <span>✔️ Prompt Writing</span>
            <span>✔️ Artwork Delivery</span>
            <span>✔️ Image Upscaling</span>
            <span>✔️ Additional Design</span>
          </div>
          <button className="rounded-md bg-green-500 text-white p-3">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gig;
