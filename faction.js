import { torn } from "../api.js";
import { render } from "../ui.js";

export default async function () {
    const data = await torn("faction/?selections=basic,positions,upgrades,chain");

    render(`
        <h2>Faction</h2>

        <div class="card">
            <h3>${data.name}</h3>
            <p>Members: ${Object.keys(data.members).length}</p>
            <p>Respect: ${data.respect.toLocaleString()}</p>
        </div>

        <div class="card">
            <h3>Chain</h3>
            <p>Current: ${data.chain.current}</p>
            <p>Timeout: ${data.chain.timeout}</p>
        </div>
    `);
}
