import ThanksImage from '../assets/images/illustration-thank-you.svg'
// eslint-disable-next-line react/prop-types
function Thanks({ valor }) {
  return (
    <article className="space-y-5 bg-slate-800/80 p-8 w-5/6 lg:w-full text-center lg:max-w-[440px] mx-auto rounded-lg">
      <div className="flex justify-center">
        <img
          src={ThanksImage}
          alt="icon icon-thanks"
        />
      </div>
      <p className="text-orange-500 py-1  bg-slate-800 w-3/6 mx-auto rounded-lg">
        You selected {valor} out of 5
      </p>
      <h2 className="text-3xl font-semibold text-white">Thank you!</h2>
      <p className="text-gray-400">
        We appreciate you taking the time to give a rating.If you ever need more
        support, don´t hesitate to get in touch!
      </p>
    </article>
  );
}

export default Thanks;
