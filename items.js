import { torn } from "../api.js";
import { render } from "../ui.js";

export default async function () {
    const data = await torn("user/?selections=inventory");

    let html = `<h2>Inventory</h2><div class="card">`;

    for (const item of data.inventory) {
        html += `<p>${item.name} x${item.quantity}</p>`;
    }

    html += `</div>`;
    render(html);
}
