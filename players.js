import { torn } from "../api.js";
import { render } from "../ui.js";

export default async function () {
    const user = await torn("user/?selections=basic,profile,personalstats,networth,bars,cooldowns");

    render(`
        <h2>Player Overview</h2>

        <div class="card">
            <h3>${user.name}</h3>
            <p>Level: ${user.level}</p>
            <p>Rank: ${user.rank}</p>
            <p>Age: ${user.age} days</p>
        </div>

        <div class="card">
            <h3>Bars</h3>
            <p>Energy: ${user.energy.current}/${user.energy.maximum}</p>
            <p>Nerve: ${user.nerve.current}/${user.nerve.maximum}</p>
            <p>Happy: ${user.happy.current}/${user.happy.maximum}</p>
            <p>Life: ${user.life.current}/${user.life.maximum}</p>
        </div>

        <div class="card">
            <h3>Cooldowns</h3>
            <p>Drug: ${user.cooldowns.drug}</p>
            <p>Medical: ${user.cooldowns.medical}</p>
            <p>Booster: ${user.cooldowns.booster}</p>
        </div>

        <div class="card">
            <h3>Networth</h3>
            <p>Total: $${user.networth.total.toLocaleString()}</p>
        </div>
    `);
}
