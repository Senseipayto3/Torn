import { torn } from "../api.js";
import { render } from "../ui.js";

export default async function () {
    const data = await torn("user/?selections=crimes");

    render(`
        <h2>Crimes</h2>

        <div class="card">
            <h3>Crime XP</h3>
            <p>${data.crimes.exp}</p>
        </div>

        <div class="card">
            <h3>Crime Log</h3>
            <p>${data.crimes.log.length} entries</p>
        </div>
    `);
}
