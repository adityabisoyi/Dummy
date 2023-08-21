const menuList = [
    {
        name: "Home",
        elements: [],
        link: "/hello"
    },
    {
        name: "Men",
        elements: [
            {
                name: "Top Wear",
                elements: [],
                link: "/hello"
            },
            {
                name: "Top Wear",
                elements: [
                    {
                        name: "tshirt",
                        link: "/hello"
                    },
                    {
                        name: "tshirt",
                        link: "/hello"
                    },
                    {
                        name: "tshirt",
                        link: "/hello"
                    },
                    {
                        name: "tshirt",
                        link: "/hello"
                    }
                ]
            },
            {
                name: "Top Wear",
                elements: [
                    {
                        name: "tshirt",
                        link: "/hello"
                    },
                    {
                        name: "tshirt",
                        link: "/hello"
                    },
                    {
                        name: "tshirt",
                        link: "/hello"
                    },
                    {
                        name: "tshirt",
                        link: "/hello"
                    }
                ]
            },

        ]
    },
    {
        name: "Men",
        elements: [
            {
                name: "Top Wear",
                elements: [
                    {
                        name: "tshirt",
                        link: "/hello"
                    },
                    {
                        name: "tshirt",
                        link: "/hello"
                    },
                    {
                        name: "tshirt",
                        link: "/hello"
                    },
                    {
                        name: "tshirt",
                        link: "/hello"
                    }
                ]
            },
            {
                name: "Top Wear",
                elements: [
                    {
                        name: "tshirt",
                        link: "/hello"
                    },
                    {
                        name: "tshirt",
                        link: "/hello"
                    },
                    {
                        name: "tshirt",
                        link: "/hello"
                    },
                    {
                        name: "tshirt",
                        link: "/hello"
                    }
                ]
            },
            {
                name: "Top Wear",
                elements: [
                    {
                        name: "tshirt",
                        link: "/hello"
                    },
                    {
                        name: "tshirt",
                        link: "/hello"
                    },
                    {
                        name: "tshirt",
                        link: "/hello"
                    },
                    {
                        name: "tshirt",
                        link: "/hello"
                    }
                ]
            },

        ]
    }
]


let deskNavHTML = "";


const addList = (ele) =>{
    let listHTML = ``;
    ele.forEach(ele =>{
        listHTML += `
            <li><a href="${ele.link}">${ele.name}</a></li>
        `;
    })

    return listHTML;
}

const addCols = (ele) =>{
    let colHTML = ``;
    ele.forEach(ele =>{
        if(ele.elements.length == 0){
            colHTML += `
            <div class="col">
                <section>
                <a href="${ele.link}"><h2>${ele.name}</h2></a>
                </section>
            </div>
            `;
        } else{
            colHTML += `
            <div class="col">
                <section>
                    <h2>${ele.name}</h2>
                    <ul class="mega-links">
                        ${addList(ele.elements)}
                    </ul>
                </section>
            </div>
            
            `;
        }
    })

    return colHTML;
}

menuList.forEach(ele =>{
    if(ele.elements.length == 0){
        deskNavHTML += `
            <li>
                <a href="${ele.link}" class="menu-item">${ele.name}</a>
            </li>
        `;
    } else{
        deskNavHTML += `
        <li>
            <a href="#" class="menu-item">Mega Menu</a>
            <div class="mega-menu menu-1">
                <div class="content">
                    ${addCols(ele.elements)}
                </div>
            </div>
        </li>
        `;
    }
})


document.getElementById('menuItems').innerHTML = deskNavHTML;



// Toggle mobile navbar  
const toggleMobileNav = () =>{
    document.getElementById('mobileSidebar').classList.toggle('slide-in')
}

const loadMobileUl = (data) =>{
    let count = 0;
    let ulHTML = ``;
    data.forEach(ele=>{
        if(ele.elements.length == 0){
            ulHTML += `<li><a href="${ele.link}">${ele.name}</a></li>`;
        } else{
            ulHTML += `<li><a href="#" onclick="loadMobileUlTwo(${count}, '${ele.name}')">${ele.name} Drop</a></li>`
        }

        count++;
    })

    document.getElementById('mobileSideUl').innerHTML = ulHTML;
}

const loadMobileUlTwo = (level, name) =>{
    let ulHTML = `<li><a href="#" onclick="loadMobileUl(menuList)">${name} Go back</a></li>`;
    let count = 1;
    menuList[level].elements.forEach(ele =>{
        if(ele.elements.length == 0){
            ulHTML += `<li><a href="${ele.link}">${ele.name}</a></li>`;
        } else{
            ulHTML += `<li><a href="#" onclick="loadMobileUlThree(${level},${count},'${name}', '${ele.name}')">${ele.name} Drop</a></li>`
        }
        count++;
    })

    document.getElementById('mobileSideUl').innerHTML = ulHTML;
}

const loadMobileUlThree = (level, sublevel, name, subname) =>{
    let ulHTML = `<li><a href="#" onclick="loadMobileUlTwo(${level}, '${name}')">${name} Back btn</a></li>`

    menuList[level].elements[sublevel].elements.forEach(ele =>{
        ulHTML += `<li><a href="${ele.link}">${ele.name} Back btn</a></li>`; 
    })

    document.getElementById('mobileSideUl').innerHTML = ulHTML;
}

loadMobileUl(menuList)