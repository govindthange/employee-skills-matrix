import ChatOnTeams from "../ChatOnTeams/ChatOnTeams";

export const columns = [
    {
        headerName: "Employee Details",
        children: [
            { field: 'Chat', cellRenderer: ChatOnTeams, valueGetter: (params) => ({ officeEmailId: params.data.officeEmailId }), maxWidth: 100, },
            { field: 'name', filter: 'agTextColumnFilter' },
            { field: 'code', maxWidth: 100, filter: 'agNumberColumnFilter', columnGroupShow: 'open' },
            { field: 'yearsOfExperience', headerName: 'Exp', maxWidth: 80, filter: 'agNumberColumnFilter', columnGroupShow: 'open' },
            { field: 'designation', filter: 'agTextColumnFilter', columnGroupShow: 'open' },
            { field: 'mobileNumber', filter: 'agTextColumnFilter', columnGroupShow: 'open' },
            { field: 'githubUrl', filter: 'agTextColumnFilter', columnGroupShow: 'open' },
            { field: 'linkedinUrl', filter: 'agTextColumnFilter', columnGroupShow: 'open' }
        ]
    },
    {
        headerName: "Skills",
        children: [
            { field: "Operating System", filter: 'agTextColumnFilter' },
            { field: "Architectural Styles", filter: 'agTextColumnFilter', },
            { field: "Version Control", filter: 'agTextColumnFilter' },
            { field: "Frameworks", filter: 'agTextColumnFilter' },
            { field: "Languages", filter: 'agTextColumnFilter' },
            { field: "Design Patterns", filter: 'agTextColumnFilter' },
            { field: "Certified", filter: 'agTextColumnFilter' },
            { field: "Course Completed", filter: 'agTextColumnFilter' },
            { field: "Devops Ops", filter: 'agTextColumnFilter' }
        ]
    }
];


export const defaultColDefConst = {
    flex: 1,
    filterParams: {
        buttons: ['apply', 'clear', 'reset']
    },
    sortable: true,
    resizable: true,
    filter: true,
};

export const mappSkillsToRow = (rowData) => {
    const rows = [];
    if (rowData === undefined) return rows;
    rowData.forEach(row => {
        const r = { ...row };
        r.skills.forEach(skill => {
            if (r[skill.tag] === undefined) {
                r[skill.tag] = [];
                r[skill.tag].push(skill.skill)
            } else {
                r[skill.tag].push(skill.skill)
            }

        })
        rows.push(r);
    });
    return rows;
}