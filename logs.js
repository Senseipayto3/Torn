import { torn } from "../api.js";
import { render } from "../ui.js";

export default async function () {
    const data = await torn("user/?selections=attacks,events");

    render(`
        <h2>Logs</h2>

        <div class="card">
            <h3>Attacks</h3>
            <p>${Object.keys(data.attacks).length} logs</p>
        </div>

        <div class="card">
            <h3>Events</h3>
            <p>${data.events.length} events</p>
        </div>
    `);
}
