import React from "react";

const shippinganddelivery = () => {
  return (
    <div className="max-w-[1200px] font-sans md:p-5 p-4 mx-auto my-[50px] md:my-[80px]">
      <p className=" text-[#2d2d2d] text-2xl ">SHIPPING & DELIVERY</p>
      <br />
      <p className="font-bold">Order Delivery</p>
      <br />
      <p>
        Ounass delivers across the GCC, with the delivery methods outlined
        below. We’re constantly striving to improve your experience, and are
        working on introducing more delivery methods across our channels. Kindly
        continue checking back for any updated. Deliveries take place between
        9:00am - 11:59pm. The following options are available for delivery to
        your requested address in the UAE.* Orders above 500 AED qualify for
        free shipping, with the exception of same-day delivery in the UAE:
      </p>

      <div className=" p-8">
        <img src="/Shipping_from_UAE_warehouse_EN.jpg" alt="image" />
      </div>

      <p>
        * Orders placed outside of working hours (9am-8pm), after the cut-off
        time and/or during any UAE public holiday will be deemed placed on the
        first UAE working day following the Order's submission. Delivery
        timelines are estimates, see further details below. Order delivery may
        face delays during promotional activity, sale season and bank holidays —
        during this time, 2-hour delivery and next-day delivery may not be
        available. We reserve the right to impose a re-delivery charge where
        your Order is not accepted at the address supplied to us on the
        confirmed date of delivery. Please note that orders paid for by Cash on
        Delivery attract a 25 AED delivery fee.
      </p>
      <br />
      <p className=" font-bold">Pre-Order Delivery</p>
      <br />
      <p>
        The above table of delivery times does not apply to Pre-Orders. Your
        item will be shipped according to the expected release date, as
        indicated on the product page of the item.
      </p>
      <br />
      <p className=" font-bold">Scheduled Time Slots</p>
      <br />
      <p>
        You can now schedule your delivery by picking a time slot most
        convenient for you at checkout. The first available time slot is
        9am-11am and then every hour until 11pm. Orders must be placed by 8pm in
        order to receive them the same day. If you place your order after 8pm
        you will select a delivery time for the next day.
      </p>
      <br />
      <p className=" font-bold">General Delivery Conditions</p>
      <br />
      <p>
        Although we are strongly committed to delivering in the timelines
        estimated in our Order confirmation or displayed on our Website or
        above, delivery timelines are estimates only. Time shall not be
        considered of the essence. Timelines start from Order confirmation.
        However, if we have not delivered your Order within 30 days of Order
        confirmation, we will provide you with a full refund. We are not
        responsible for failures to deliver for reasons outside our reasonable
        control, including where you are not available to take delivery of your
        Order or request postponement.
        <br />
        <br />
        Orders are delivered daily excluding UAE public holidays. It is your
        duty to ensure appropriate access for deliveries, including in
        particular but without limitation on Fridays.
      </p>
      <br />
      <p className=" font-bold">Delivery of Furniture or Bulky Items</p>
      <br />
      <p>
        All furniture orders are final and non-returnable. When your Order is
        ready for delivery, we will contact you to agree a delivery date. Once
        agreed, you will be responsible for accepting delivery and arranging
        appropriate means of access and installation on that date. It is your
        responsibility to ensure that our delivery team has access to the
        delivery address, and that sufficient space for the goods is available,
        hallways are measured and doors and lifts can grant full access.
        <br />
        <br />
        Delivery on the first floor and above requires service elevator access
        arranged by you and it is your responsibility to notify us of any
        potential problems with access to the premises, building, service
        elevators, etc… and make any related delivery arrangements. Where
        delivery is complicated by such factors, additional charges may apply.
        If delivery is not accepted on the agreed delivery date, goods shall be
        kept in storage free of charge for a period of up to thirty (30) days.
        If you fail to agree a revised delivery date falling within thirty (30)
        days of the initial delivery date, we retain the right to cancel your
        Order, retain all monies paid and resell the goods with no further
        liability.
        <br />
        <br />
        If on the delivery date our delivery team is unable to obtain access to
        the delivery address, a reasonable re-delivery charge may be applied. We
        will pre-inform you of this charge. In the absence of negligence, we
        will not be liable for loss or damage to the goods or your property,
        including where caused by: (i) us following your specific instructions;
        (ii) limited or no access to your nominated premises; and/or (iii) goods
        not fitting into your property. Any request to hang, erect or build
        items shall be at our discretion and we will not be responsible for any
        damage to your home in connection with such hanging, erection or
        building, nor for the integrity of such hanging, erection or building.
        Additional charges for such services may apply.
      </p>
      <br />
      <p className=" font-bold">Address Changes & Tracking</p>
      <br />
      <p>
        Our Customer Care team will be happy to assist with changing your
        preferred delivery date and address should you require. However, if you
        have received an email informing you that your order has been
        dispatched, we won’t be able to change your address. Please note that a
        change to an address outside of the original delivery country will not
        be possible.
        <br />
        <br />A tracking number will be provided by SMS once your order is
        confirmed. You will then be able to use the tracking number to track
        your order by contacting the customer care team from 10am-10pm on our
        UAE toll free number{" "}
        <a
          href="https://api.whatsapp.com/send?phone=800686277"
          className=" underline"
        >
          800686277
        </a>{" "}
        or email
        <a href="mailto:email@example.com" className=" underline">
          {" "}
          customercare@ounass.com
        </a>
      </p>
    </div>
  );
};

export default shippinganddelivery;
