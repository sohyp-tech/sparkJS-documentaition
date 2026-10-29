const createHeader = () => Header({
    className: "header",
    children: [
        Link({ to: "#/", text: "Home", style: "color: whitesmoke; text-decoration: none; font-family: Arial; font-size: 18px; font-weight: bold;" }),
        Link({ to: "#/learn", text: "Documentation", style: "color: whitesmoke; text-decoration: none; font-family: Arial; font-size: 18px; font-weight: bold;" }),
        Link({ to: "#/example", text: "To-Do App", style: "color: whitesmoke; text-decoration: none; font-family: Arial; font-size: 18px; font-weight: bold;" })
    ],
    style: "width: 100%; max-width: 900px; background: rgba(90, 27, 28, 0.75); backdrop-filter: blur(10px); border: 1px solid #AA0000; padding: 15px 30px; border-radius: 50px; display: flex; justify-content: center; align-items: center; gap: 30px; position: sticky; top: 20px; z-index: 1000; box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3); margin: 0 auto;"
});

const createFooter = () => Footer({
    text: "Spark.JS © 2026- Built with Spark.JS",
    style: "color: #555; font-family: Arial; margin: 50px 0 20px 0; text-align: center; font-size: 14px;"
});

const CodeBlock = (code) => Container({
    style: "background: #1d1c1c; border: 1px solid #333; border-radius: 10px; padding: 15px; margin: 10px 0; font-family: monospace; color: #e2dcb6; text-align: left; font-size: 15px; overflow-x: auto; width: 100%; box-sizing: border-box;",
    children: [el("pre", { text: code, style: "margin: 0; white-space: pre-wrap; font-family: monospace;" })]
});

const WidgetCard = (name, description, code, livePreview) => Column({
    style: "width: 100%; max-width: 800px; background: #110505; border: 1px solid #331111; border-radius: 15px; padding: 25px; margin-bottom: 30px; align-items: flex-start; box-sizing: border-box;",
    children: [
        el("h3", { text: name, style: "color: #AA0000; font-size: 26px; margin: 0 0 10px 0; font-weight: bold; font-family: Arial;" }),
        Text({ text: description, style: "color: #d1d1d1; font-size: 16px; margin-bottom: 20px; font-family: Arial;" }),
        el("h4", { text: "Code:", style: "color: whitesmoke; font-size: 14px; margin-bottom: 5px; font-family: Arial;" }),
        CodeBlock(code),
        el("h4", { text: "Preview:", style: "color: whitesmoke; font-size: 14px; margin-top: 15px; margin-bottom: 5px; font-family: Arial;" }),
        Container({
            style: "width: 100%; padding: 20px; background: #0c0101; border: 1px dashed #AA0000; border-radius: 10px; display: flex; justify-content: center; align-items: center; box-sizing: border-box; overflow-x: auto;",
            children: [livePreview]
        })
    ]
});

const home_page = () => Column({
    children: [
        createHeader(),
        Column({
            style: "margin: 10px; width: 100%; align-items: center;",
            children: [
                Column({
                    children: [
                        Image({ src: "./logo.jpeg", alt: "spark.js logo", style: "width: 150px; height: 150px; object-fit: cover; border-radius: 50%; border: 2px solid #AA0000; margin-top: 40px;" }),
                        el("h2", { text: "Spark.JS", style: 'font-size: 35px; color: whitesmoke; font-weight: bold; margin-top: 15px; font-family: Arial;'}),
                        Text({ text: "The framework that will change the framework world!", style: "color: rgb(207, 135, 123); font-size: 22px; margin-bottom: 25px; text-align: center; font-family: Arial;" }),
                        Row({
                            children: [
                                Button({ text: "Learn", onClick: () => { window.location.href = "#/learn" }, style: "color: white; background-color: #AA0000; border-radius: 20px; border: 0; padding: 10px; margin: 5px; width: 120px; height: 45px; text-align: center; font-size: 18px; cursor: pointer; font-family: Arial;" }),
                                Button({ text: "Example", onClick: () => { window.location.href = "#/example" }, style: "color: #AA0000; background-color: transparent; border-radius: 20px; border: 1px solid #AA0000; padding: 10px; margin: 5px; width: 120px; height: 45px; text-align: center; font-size: 18px; cursor: pointer; font-family: Arial;" })
                            ],
                            style: "margin: 5px; gap: 15px;"
                        })
                    ],
                    style: "margin-top: 20px;"
                }),
                el("hr",{style: "width: 80%; max-width: 800px; height: 1px; border: none; background: #331111; margin: 40px 0;"}),
                Column({
                    children: [
                        el("h2", { text: "About", style: "font-size: 30px; color: whitesmoke; font-weight: bold; margin-bottom: 15px; font-family: Arial;" }),
                        Text({ text: "Spark.JS is a micro-framework that allows you to manage your web page just with your JavaScript file without any delay in load or any weight on your computer, because it is the fastest, lightest, and easiest framework in the world! Even if your website needs routing or state management, SparkJS allows you to do it easily!", style: "color: rgb(148, 80, 3); font-size: 18px; line-height: 1.6; text-align: center; font-family: Arial;" })
                    ],
                    style: "width: 80%; max-width: 800px; align-items: center;"
                }),
                el("hr",{style: "width: 80%; max-width: 800px; height: 1px; border: none; background: #331111; margin: 40px 0;"}),
                Column({
                    style: "width: 80%; max-width: 800px; align-items: flex-start;",
                    children: [
                        el("h2", { text: "Quick Start", style: "font-size: 30px; color: whitesmoke; font-weight: bold; margin-bottom: 15px; font-family: Arial;" }),
                        Text({ text: "You can start with SparkJS by adding this line to your HTML:", style: "color: beige; font-size: 18px; margin-bottom: 15px; font-family: Arial;" }),
                        CodeBlock(`<script src="https://sohyp-tech.github.io/sparkJS/index.js"></script>`)
                    ]
                }),
                el("hr",{style: "width: 80%; max-width: 800px; height: 1px; border: none; background: #331111; margin: 40px 0;"}),
                Column({
                    style: "width: 80%; max-width: 800px; align-items: flex-start;",
                    children: [
                        el("h2", { text: "Features", style: "font-size: 30px; color: whitesmoke; font-weight: bold; margin-bottom: 15px; font-family: Arial;" }),
                        el("h3", { text: "Speed", style: "font-size: 22px; color: beige; margin: 15px 0 5px 0; font-weight: 400; font-family: Arial;" }),
                        Text({ text: "Spark.JS is the best in speed, because it doesn't need Node.js to work—it's just a CDN URL in a script tag and you start coding!", style: "color: #c78632; font-size: 18px; line-height: 1.5; font-family: Arial;" }),
                        el("h3", { text: "Light", style: "font-size: 22px; color: beige; margin: 15px 0 5px 0; font-weight: 400; font-family: Arial;" }),
                        Text({ text: "Spark.JS is the lightest framework in the world, it is only 1.2 KB! That's an amazing thing because this makes it fast as well.", style: "color: #c78632; font-size: 18px; line-height: 1.5; font-family: Arial;" }),
                        el("h3", { text: "Easy", style: "font-size: 22px; color: beige; margin: 15px 0 5px 0; font-weight: 400; font-family: Arial;" }),
                        Text({ text: "One reason Spark.JS is so easy is that its syntax resembles Flutter's syntax. If you took a look at it for just 5 seconds, you will understand it!", style: "color: #c78632; font-size: 18px; line-height: 1.5; font-family: Arial;" })
                    ]
                }),
                el("hr",{style: "width: 80%; max-width: 800px; height: 1px; border: none; background: #331111; margin: 40px 0;"}),
                Column({
                    style: "width: 80%; max-width: 800px; align-items: center;",
                    children: [
                        el("h2", { text: "Surprising Fact!", style: "font-size: 30px; color: whitesmoke; font-weight: bold; margin-bottom: 15px; font-family: Arial;" }),
                        Text({ text: "If you haven't trusted in Spark.JS even now, I am sure you will if you know that Spark.JS Documentation was built with Spark.JS!", style: "color: beige; font-size: 18px; margin-bottom: 25px; text-align: center; font-family: Arial;" }),
                        Button({ text: "Get started now!", onClick: () => { window.location.href = "#/learn" }, style: "color: #AA0000; background-color: transparent; border-radius: 20px; border: 1px solid #AA0000; padding: 10px; margin: 5px; width: 200px; height: 45px; text-align: center; font-size: 18px; cursor: pointer; font-family: Arial;" })
                    ]
                })
            ]
        }),
        createFooter()
    ],
    style: "align-items: center; width: 100%; min-height: 100vh;"
});

const get_started_page = () => {
    const stateObj = {};
    const demoEl = Text({ text: "0", style: "color: #AA0000; font-size: 30px; font-weight: bold; margin: 10px 0;" });
    textState(stateObj, "count", 0, demoEl);

    return Column({
        children: [
            createHeader(),
            Column({
                style: "margin: 40px 0 20px 0; text-align: center; align-items: center;",
                children: [
                    el("h1", { text: "Documentation", style: "color: whitesmoke; font-size: 40px; font-weight: bold; font-family: Arial;" }),
                    Text({ text: "The complete guide to all Spark.JS components and APIs.", style: "color: #c78632; font-size: 20px; margin-top: 10px; font-family: Arial;" })
                ]
            }),
            Column({
                style: "width: 100%; align-items: center; padding: 0 20px; box-sizing: border-box;",
                children: [
                    
                    el("h2", { text: "1. Layout Widgets", style: "color: whitesmoke; font-size: 28px; margin: 40px 0 20px 0; width: 100%; max-width: 800px; border-bottom: 1px solid #AA0000; padding-bottom: 10px; font-family: Arial;" }),
                    WidgetCard("Row", "Arranges children horizontally.", "Row({\n  children: [\n    Text({ text: 'A' }),\n    Text({ text: 'B' })\n  ]\n})", Row({ children: [Text({ text: "Item A", style: "color: #c78632; margin: 0 10px;" }), Text({ text: "Item B", style: "color: #c78632; margin: 0 10px;" })], style: "gap: 15px;" })),
                    WidgetCard("Column", "Arranges children vertically.", "Column({\n  children: [\n    Text({ text: 'First' }),\n    Text({ text: 'Second' })\n  ]\n})", Column({ children: [Text({ text: "First", style: "color: #c78632;" }), Text({ text: "Second", style: "color: #c78632;" })], style: "gap: 10px;" })),
                    WidgetCard("Container", "A generic box for styling.", "Container({\n  text: 'Box',\n  style: 'padding: 20px;'\n})", Container({ text: "I am a Container", style: "padding: 20px; background: #AA0000; color: white; border-radius: 10px; font-family: Arial;" })),
                    WidgetCard("Section", "A semantic section tag.", "Section({\n  text: 'Section content'\n})", Section({ text: "I am a Section element", style: "color: #c78632; font-size: 18px; border: 1px solid #333; padding: 10px;" })),

                    el("h2", { text: "2. Text & Typography", style: "color: whitesmoke; font-size: 28px; margin: 40px 0 20px 0; width: 100%; max-width: 800px; border-bottom: 1px solid #AA0000; padding-bottom: 10px; font-family: Arial;" }),
                    WidgetCard("Text", "Displays a paragraph.", "Text({\n  text: 'Hello Spark.JS'\n})", Text({ text: "Hello Spark.JS", style: "color: beige; font-size: 20px; font-family: Arial;" })),
                    WidgetCard("Header (Element)", "A semantic header tag.", "Header({\n  text: 'Header content'\n})", Header({ children: [Text({ text: "I am a Header element", style: "color: #c78632; margin: 0;" })], style: "padding: 10px; border: 1px solid #AA0000; width: 100%; text-align: center;" })),
                    WidgetCard("Footer (Element)", "A semantic footer tag.", "Footer({\n  text: 'Footer content'\n})", Footer({ text: "I am a Footer element", style: "color: #555; padding: 10px; width: 100%; text-align: center;" })),

                    el("h2", { text: "3. Media Widgets", style: "color: whitesmoke; font-size: 28px; margin: 40px 0 20px 0; width: 100%; max-width: 800px; border-bottom: 1px solid #AA0000; padding-bottom: 10px; font-family: Arial;" }),
                    WidgetCard("Image", "Displays an image.", "Image({\n  src: './logo.jpeg',\n  alt: 'logo'\n})", Image({ src: "./logo.jpeg", alt: "logo", style: "width: 100px; height: 100px; border-radius: 50%;" })),
                    WidgetCard("Audio", "Embeds audio.", "Audio({\n  src: 'audio.mp3'\n})", Audio({ src: "#", style: "width: 100%; max-width: 300px;" })),
                    WidgetCard("Video", "Embeds video. (Note: implementation in core is currently a stub).", "Video({\n  src: 'video.mp4'\n})", Text({ text: "Video widget (check core implementation)", style: "color: #c78632;" })),

                    el("h2", { text: "4. Forms & Inputs", style: "color: whitesmoke; font-size: 28px; margin: 40px 0 20px 0; width: 100%; max-width: 800px; border-bottom: 1px solid #AA0000; padding-bottom: 10px; font-family: Arial;" }),
                    WidgetCard("TextField", "Text input field.", "TextField({\n  holder: 'Enter name...'\n})", TextField({ holder: "Enter your name...", style: "padding: 10px; border-radius: 5px; border: 1px solid #AA0000; background: #1a1a1a; color: white; font-family: Arial;" })),
                    WidgetCard("TextArea", "Multi-line text input.", "TextArea({\n  holder: 'Message...'\n})", TextArea({ holder: "Write a message...", style: "padding: 10px; border-radius: 5px; border: 1px solid #AA0000; background: #1a1a1a; color: white; width: 100%; height: 80px; font-family: Arial;" })),
                    WidgetCard("Checkbox", "A checkbox input.", "Checkbox({})", Checkbox({ style: "transform: scale(1.5); cursor: pointer; accent-color: #AA0000;" })),
                    WidgetCard("Radio", "A radio button input.", "Radio({})", Radio({ style: "transform: scale(1.5); cursor: pointer; accent-color: #AA0000;" })),
                    WidgetCard("Select", "A dropdown menu.", "Select({\n  children: [ Option({ text: 'Opt 1' }) ]\n})", Select({ children: [el("option", { text: "Option 1" }), el("option", { text: "Option 2" })], style: "padding: 10px; border-radius: 5px; border: 1px solid #AA0000; background: #1a1a1a; color: white; font-family: Arial;" })),
                    WidgetCard("Form", "A semantic form tag.", "Form({\n  children: [ ... ]\n})", Form({ children: [Text({ text: "Form wrapper", style: "color: #c78632;" })], style: "display: flex; flex-direction: column; gap: 10px;" })),

                    el("h2", { text: "5. Navigation", style: "color: whitesmoke; font-size: 28px; margin: 40px 0 20px 0; width: 100%; max-width: 800px; border-bottom: 1px solid #AA0000; padding-bottom: 10px; font-family: Arial;" }),
                    WidgetCard("Link", "A clickable hyperlink.", "Link({\n  to: '#',\n  text: 'Click Here'\n})", Link({ to: "#", text: "Click Here", style: "color: #AA0000; text-decoration: none; font-size: 18px; font-weight: bold; font-family: Arial;" })),
                    WidgetCard("Nav", "A semantic nav tag.", "Nav({\n  children: [ ... ]\n})", Nav({ children: [Text({ text: "Nav wrapper", style: "color: #c78632;" })], style: "padding: 10px; border: 1px solid #AA0000;" })),

                    el("h2", { text: "6. Core API", style: "color: whitesmoke; font-size: 28px; margin: 40px 0 20px 0; width: 100%; max-width: 800px; border-bottom: 1px solid #AA0000; padding-bottom: 10px; font-family: Arial;" }),
                    WidgetCard("el()", "The base function to create any HTML element.", "el('div', {\n  text: 'Hello',\n  style: 'color: red;'\n})", el("div", { text: "Hello from el()", style: "color: #AA0000; font-size: 18px; font-weight: bold;" })),
                    WidgetCard("TextStateController()", "Creates a reactive property for text content.", "const obj = {};\nTextStateController(obj, 'name', 'Ahmed', el);\nobj.name = 'Ali'; // Updates DOM", Column({ children: [demoEl, Button({ text: "Change State to 10", onClick: () => { stateObj.count = 10; }, style: "background: #AA0000; color: white; border: none; border-radius: 5px; padding: 8px 15px; margin-top: 10px; cursor: pointer; font-family: Arial;" })], style: "gap: 10px;" })),
                    WidgetCard("WidgetStateController()", "Creates a reactive property for innerHTML.", "const obj = {};\nWidgetStateController(obj, 'html', '<b>Hi</b>', el);\nobj.html = '<i>Bye</i>';", Text({ text: "Works similarly to textState but injects HTML.", style: "color: #c78632;" })),
                    WidgetCard("mount()", "Appends a component to an existing DOM element.", "mount('[sk-body]', Component())", Text({ text: "Used by the Router to mount pages.", style: "color: #c78632;" })),
                    WidgetCard("createSparkRouter()", "Handles Hash-based routing.", "createSparkRouter({\n  '/': () => mount('[sk-body]', Home()),\n  '/about': () => mount('[sk-body]', About())\n})", Text({ text: "You are using it right now to read this page!", style: "color: #c78632;" })),
                    
                    Column({
                        style: "margin: 60px 0; align-items: center;",
                        children: [
                            Text({ text: "Ready to see a full app?", style: "color: whitesmoke; font-size: 20px; margin-bottom: 15px; font-family: Arial;" }),
                            Button({ text: "Go to To-Do App →", onClick: () => { window.location.href = "#/example"; }, style: "color: #AA0000; background-color: transparent; border-radius: 20px; border: 1px solid #AA0000; padding: 10px 20px; font-size: 18px; cursor: pointer; font-family: Arial;" })
                        ]
                    })
                ]
            }),
            createFooter()
        ],
        style: "align-items: center; width: 100%; min-height: 100vh;"
    });
};

const example_page = () => {
    let todos = [];
    
    const inputField = TextField({
        holder: "What needs to be done?",
        style: "padding: 12px; border-radius: 8px; border: 1px solid #AA0000; background: #1a1a1a; color: white; width: 250px; font-size: 16px; outline: none; font-family: Arial;"
    });

    const listContainer = Column({
        style: "width: 100%; max-width: 400px; margin-top: 20px; gap: 10px;",
        children: []
    });

    const renderList = () => {
        listContainer.innerHTML = "";
        if (todos.length === 0) {
            listContainer.appendChild(Text({ text: "No tasks yet. Add one!", style: "color: #555; font-size: 16px; font-family: Arial;" }));
            return;
        }
        todos.forEach((todo, index) => {
            const item = Row({
                style: "width: 100%; background: #1d1c1c; padding: 12px; border-radius: 8px; border-left: 4px solid #AA0000; box-sizing: border-box;",
                children: [
                    Text({ text: todo, style: "color: whitesmoke; font-size: 16px; margin: 0; flex: 1; text-align: left; font-family: Arial;" }),
                    Button({
                        text: "X",
                        onClick: () => { todos.splice(index, 1); renderList(); },
                        style: "background: transparent; color: #AA0000; border: none; font-size: 18px; cursor: pointer; font-weight: bold; font-family: Arial;"
                    })
                ]
            });
            listContainer.appendChild(item);
        });
    };

    const addTodo = () => {
        const val = inputField.value.trim();
        if (val !== "") {
            todos.push(val);
            inputField.value = "";
            renderList();
        }
    };

    inputField.onkeydown = (e) => { if (e.key === "Enter") addTodo(); };

    const appContainer = Column({
        style: "background: #110505; border: 1px solid #331111; border-radius: 15px; padding: 40px; margin-top: 40px; width: 90%; max-width: 500px; box-shadow: 0 10px 30px rgba(0,0,0,0.5);",
        children: [
            el("h2", { text: "My To-Do List", style: "color: whitesmoke; font-size: 26px; margin: 0 0 20px 0; font-family: Arial;" }),
            Row({
                style: "gap: 10px; margin-bottom: 20px;",
                children: [
                    inputField,
                    Button({ text: "Add", onClick: addTodo, style: "background: #AA0000; color: white; border: none; border-radius: 8px; padding: 12px 20px; font-size: 16px; cursor: pointer; font-weight: bold; font-family: Arial;" })
                ]
            }),
            listContainer
        ]
    });
    
    setTimeout(renderList, 0);

    return Column({
        children: [
            createHeader(),
            Column({
                style: "align-items: center; padding: 20px; width: 100%; min-height: 80vh;",
                children: [
                    el("h1", { text: "To-Do App Example", style: "color: whitesmoke; font-size: 36px; margin-top: 20px; font-family: Arial;" }),
                    Text({ text: "Built entirely with Spark.JS components. No HTML, no React.", style: "color: #c78632; font-size: 18px; margin-top: 10px; font-family: Arial;" }),
                    appContainer
                ]
            }),
            createFooter()
        ],
        style: "align-items: center; width: 100%;"
    });
};

createSparkRouter({
    "/": () => { mount("[sk-body]", home_page()); },
    "/learn": () => { mount("[sk-body]", get_started_page()); },
    "/example": () => { mount("[sk-body]", example_page()); },
    "/404": () => { mount("[sk-body]", Text({ text: "404 - Page Not Found", style: "color: whitesmoke; font-size: 30px; margin-top: 50px; font-family: Arial;" })); }
});
