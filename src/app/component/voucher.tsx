import "./styles/voucher.css";

const vocs = [
  {
    title: "Romantic Dinner",
    desc: "Tempatnya yang lusyu",
  },
  {
    title: "Homemad Food",
    desc: "All you want",
  },
  {
    title: "Concert Date",
    desc: "Pengen nonton HC 😔",
  },
  {
    title: "Night Ride",
    desc: "Aku mau di culieeekk",
  },
  {
    title: "Free Hug",
    desc: "Ayo lagi remake hk pt.2",
  },
  {
    title: "Have a Little Picnic",
    desc: "Kemana aja sambil foto lusyu",
  },
  {
    title: "Road Trip",
    desc: "Yang jauh ya!!!!!",
  },
  {
    title: "Coffee Date",
    desc: "Sering sih, tp aku mau yg gabiasa 🕺",
  },
  {
    title: "Ice Cream Date",
    desc: "Mau gelatooooo 😭",
  },
  {
    title: "Beach Date",
    desc: "Ayo malem ya!!",
  },
  {
    title: "Watching Sunset 🌞",
    desc: "Mau foto pake digicam jg 😾👊",
  },
  {
    title: "Anything u Want",
    desc: "👩‍❤️‍💋‍👨😜🤩👀🤝👅",
    special: true,
  },
];

type VoucherItemProps = {
  val: (typeof vocs)[number];
} & React.HTMLAttributes<HTMLDivElement>;

const VoucherItem = ({ val, ...rest }: VoucherItemProps) => {
  function handleClick() {
    window.open("https://wa.me/6281328127813?text=Ayookkk+" + val.title);
  }
  return (
    <div className="ticketContainer">
      <div className="ticket" onClick={() => handleClick()}>
        <div className="ticketTitle">{val.title}</div>
        <hr />
        <div className="ticketDetail">
          <div>{val.desc}</div>
        </div>
        <div className="ticketRip">
          <div className="circleLeft"></div>
          <div className="ripLine"></div>
          <div className="circleRight"></div>
        </div>
        <div className="ticketSubDetail">
          <div className="code">Claim!</div>
        </div>
      </div>
      {/* <div className="ticketShadow"></div> */}
    </div>
  );
};

export default function () {
  return vocs.map((val, index) => <VoucherItem val={val} key={index} />);
}
