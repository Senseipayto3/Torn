import { torn } from "../api.js";
import { render } from "../ui.js";

export default async function () {
    const data = await torn("company/?selections=profile,employees");

    render(`
        <h2>Company</h2>

        <div class="card">
            <h3>${data.company_name}</h3>
            <p>Rating: ${data.rating}</p>
            <p>Daily Income: $${data.daily_income.toLocaleString()}</p>
        </div>

        <div class="card">
            <h3>Employees</h3>
            <p>${Object.keys(data.employees).length} employees</p>
        </div>
    `);
}
