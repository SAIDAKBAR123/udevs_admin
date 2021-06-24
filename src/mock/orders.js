const orders = {
    count: 110,
    orders: [],
    im: 
    {
        aggregator_id: "29f8e467-4937-4a69-b36b-46d9146fb85f",
        apartment: "",
        building: "",
        client_id: "58840158-720d-40a6-b9a0-6e1263cfbd17",
        client_name: "Express 24",
        client_phone_number: "+998712026500",
        co_delivery_price: 0,
        courier: { phone: "", first_name: "", last_name: "", vehicle_number: "" },
        first_name: "",
        last_name: "",
        phone: "",
        vehicle_number: "",
        courier_id: "",
        created_at: "2021-06-23 10:23:30",
        delivery_time: "",
        delivery_type: "self-pickup",
        description: "",
        distance: 0,
        external_order_id: "372593",
        extra_phone_number: "+998712026500",
        finished_at: "2021-06-23 10:23:46",
        floor: "",
        id: "8ac8699b-fcb9-4c21-8ed2-836a81b02850",
        order_amount: 15000,
        paid: false,
        payment_type: "cash",
        rating: "",
        review: "",
        source: "admin_panel",
        status_id: "e665273d-5415-4243-a329-aee410e39465",
        status_notes: [{ id: "2cb94448-98fd-400d-91dc-6ea2b43a9059", description: ""}],
        steps: [{ branch_name: "Branch for Test", branch_id: "1b2f4740-8d09-4903-bdfa-b1a646726c48" }],
        to_address: ""
    }
}

export function getOrders () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            for(let _ in 110) {
                orders.orders.push(orders.orders.im)
            }
            resolve(orders)
        }, 3000);
    })
}