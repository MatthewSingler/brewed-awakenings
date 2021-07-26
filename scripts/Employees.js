import { getEmployees } from "./database.js"
import { getOrders } from "./database.js"
import { getProducts } from "./database.js"
//import { Products } from "./Products.js"//why did i do this?

const products = getProducts() //never read, why//
const employees = getEmployees()
const orders = getOrders()
export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li id="employee--${employee.id}">${employee.name}</li>`
    }

    html += "</ul>"

    return html
}

//I need to have orders talk to employees//

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("employee")) {
            const [, employeeId] = itemClicked.id.split("--")

            for (const employee of employees) {
                if (employee.id === parseInt(employeeId)) {
                    const employeeOrders = orders.filter(     //never read, why//
                        (order) => {
                            if (order.employeeId === parseInt(employeeId)) {
                                return true
                            }
                        }
                        )
                        window.alert(`${employee.name} has sold ${employeeOrders.length}`)
                    }

            }
        }
    }

)