import {Task} from "./task_types";

// export const mockTask: Task = {
//     id: 0,
//     address: "0x81248b700730b9e817d67f42753618d7b88dcf01",
//     description: "Spend 1 hour learning about React",
//     pledge: {
//         _hex: "100"
//     },
//     created_at: new Date().toLocaleString(),
//     type: "recurring",
//     deadline: new Date().toLocaleString(),
// }

export const mockTasks: Task[] = [
    {
        id: 0,
        address: "0x81248b700730b9e817d67f42753618d7b88dcf01",
        description: "Complete Tutoring Session with Mark",
        pledge: {
            _hex: "500"
        },
        created_at: new Date().toLocaleString(),
        type: "recurring",
        deadline: new Date().toLocaleString(),
    },
    {
        id: 1,
        address: "0x81248b700730b9e817d67f42753618d7b88dcf01",
        description: "Apply to 5 jobs",
        pledge: {
            _hex: "500"
        },
        created_at: new Date().toLocaleString(),
        type: "recurring",
        deadline: new Date().toLocaleString(),
    },
    {
        id: 2,
        address: "0x81248b700730b9e817d67f42753618d7b88dcf01",
        description: "Write 5 professional development or promotional posts",
        pledge: {
            _hex: "500"
        },
        created_at: new Date().toLocaleString(),
        type: "recurring",
        deadline: new Date().toLocaleString(),
    },
    {
        id: 3,
        address: "0x81248b700730b9e817d67f42753618d7b88dcf01",
        description: "Have a meeting with a mentor or therapist",
        pledge: {
            _hex: "500"
        },
        created_at: new Date().toLocaleString(),
        type: "recurring",
        deadline: new Date().toLocaleString(),
    }
];

export const makeMockTasks = (numTasks: number) => {
    const tasks: Task[] = [];
    let taskCnt = 0;
    for (let i = 0; i < numTasks; i++) {
        let task = mockTasks[taskCnt];
        task.id= i;
        tasks.push(task);
        taskCnt++;
        if (taskCnt == mockTasks.length-1) taskCnt = 0;
    }
    return tasks;
}