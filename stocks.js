import { torn } from "../api.js";
import { render } from "../ui.js";

export default async function () {
    const data = await torn("user/?selections=stocks");

    let html = `
        <h2>Stocks</h2>
        <div class="card">
            <h3>Holdings</h3>
    `;

    for (const id in data.stocks) {
        const s = data.stocks[id];
        html += `<p>${s.name}: ${s.shares} shares</p>`;
    }

    html += `</div>`;
    render(html);
}
