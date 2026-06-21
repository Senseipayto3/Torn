import { torn } from "../api.js";
import { render } from "../ui.js";

export default async function () {
    const data = await torn("torn/?selections=travel");

    let html = `<h2>Travel</h2><div class="card">`;

    for (const loc in data.travel) {
        html += `<p>${loc}: ${data.travel[loc].items.length} items</p>`;
    }

    html += `</div>`;
    render(html);
}
