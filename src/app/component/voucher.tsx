import "./styles/voucher.css";

const vocs = [
  {
    title: "Romantic Dinner",
    desc: "Lorem ipsum dolor sit amet",
    footer: {
      left: "klodi",
      right: "halo",
    },
  },
  {
    title: "Homemad Food",
    desc: "Lorem ipsum dolor sit amet",
    footer: {
      left: "",
      right: "by Chef Klodi",
    },
  },
  {
    title: "Concert Date",
    desc: "Lorem ipsum dolor sit amet",
    footer: {
      left: "klodi",
      right: "halo",
    },
  },
  {
    title: "Night Ride",
    desc: "Lorem ipsum dolor sit amet",
    footer: {
      left: "klodi",
      right: "halo",
    },
  },
  {
    title: "Free Hug",
    desc: "Lorem ipsum dolor sit amet",
    footer: {
      left: "klodi",
      right: "halo",
    },
  },
  {
    title: "All Day w/Klodi",
    desc: "all day nga tuch 😋",
    footer: {
      left: "klodi",
      right: "halo",
    },
  },
  {
    title: "Have a Little Picnic",
    desc: "Lorem ipsum dolor sit amet",
    footer: {
      left: "klodi",
      right: "halo",
    },
  },
  {
    title: "Road Trip",
    desc: "Lorem ipsum dolor sit amet",
    footer: {
      left: "klodi",
      right: "halo",
    },
  },
  {
    title: "Coffee Date",
    desc: "Lorem ipsum dolor sit amet",
    footer: {
      left: "klodi",
      right: "halo",
    },
  },
  {
    title: "Ice Cream Date",
    desc: "Lorem ipsum 🍦🍨❄️💦",
    footer: {
      left: "klodi",
      right: "halo",
    },
  },
  {
    title: "Beach Date",
    desc: "Lorem ipsum dolor sit amet",
    footer: {
      left: "klodi",
      right: "halo",
    },
  },
  {
    title: "Watching Sunset 🌞",
    desc: "Lorem ipsum dolor sit amet",
    footer: {
      left: "klodi",
      right: "halo",
    },
  },
  {
    title: "Anything u Want",
    desc: "Lorem ipsum dolor sit amet",
    special: true,
    footer: {
      left: "klodi",
      right: "halo",
    },
  },
];

type VoucherItemProps = {
  val: (typeof vocs)[number];
} & React.HTMLAttributes<HTMLDivElement>;

const VoucherItem = ({ val, ...rest }: VoucherItemProps) => {
  function handleClick() {
    window.open(
      "https://wa.me/6281328127813?text=" +
        val.title +
        "+atau+apa+deh+ini+bisa+diganti"
    );
  }
  return (
    <div className="ticketContainer">
      <div className="ticket" onClick={() => handleClick()}>
        <div className="ticketTitle">{val.title}</div>
        <hr />
        <div className="ticketDetail">
          <div>{val.desc}</div>
          {/* <div>Studio:&nbsp; 5</div> */}
          {/* <div>Time:&emsp; 19:20</div> */}
        </div>
        <div className="ticketRip">
          <div className="circleLeft"></div>
          <div className="ripLine"></div>
          <div className="circleRight"></div>
        </div>
        <div className="ticketSubDetail">
          <div className="code">{val.footer.left}</div>
          <div className="date">
            {val.footer.right}
            {/* Jan 14<sup>th</sup> 2023 */}
          </div>
        </div>
      </div>
      {/* <div className="ticketShadow"></div> */}
    </div>
  );
};

export default function () {
  return vocs.map((val, index) => <VoucherItem val={val} key={index} />);
}
