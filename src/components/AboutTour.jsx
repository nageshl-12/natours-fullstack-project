import { ArrowRight } from 'lucide-react';

export default function AboutTour() {
  return (
    <div className="space-y-4 px-2 py-2">
      <h1 className="text-green font-bold md:text-3xl text-2xl uppercase ">
        About the forest hiker Tour
      </h1>
      <p className="md:text-lg ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quis
        placeat sequi mollitia, incidunt veritatis saepe officiis excepturi
        similique possimus eum quasi vero cupiditate sunt odit quisquam deleniti
        corporis pariatur nostrum, sed error rem. Unde fugiat esse, nam harum
        aliquam dignissimos eos perferendis fuga commodi consectetur delectus
        quas excepturi nihil. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. <br />
        Quisquam repudiandae cupiditate culpa placeat optio, doloremque ad
        deserunt, officiis fugit illum voluptates. Mollitia cum, quas delectus
        ut ipsum deleniti deserunt quaerat, ex facilis eius quod quam. Omnis
        illum incidunt temporibus vel et earum? Quos doloribus veniam laborum
        rerum ut voluptatum esse.
      </p>
      <button className="bg-green px-4 py-2 rounded-lg text-white capitalize flex gap-1 items-center cursor-pointer">
        Book this tour <ArrowRight size={19} />
      </button>
    </div>
  );
}
