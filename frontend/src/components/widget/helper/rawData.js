export const growthOverview = [
    {
        id: 1,
        icon: 'mdi mdi-cube text-danger icon-lg',
        title: 'Total Revenue',
        count: '$6,560',
        innerIcon: 'mdi mdi-alert-octagon me-1',
        innerTxt: '65% lower growth'
    },
    {
        id: 2,
        icon: 'mdi mdi-receipt text-warning icon-lg',
        title: 'Orders',
        count: '3455',
        innerIcon: 'mdi mdi-bookmark-outline me-1',
        innerTxt: ' Product-wise sales'
    },
    {
        id: 3,
        icon: 'mdi mdi-chart-box text-success icon-lg',
        title: 'Sales',
        count: '5693',
        innerIcon: 'mdi mdi-calendar me-1',
        innerTxt: 'Weekly Sales'
    },
    {
        id: 4,
        icon: 'mdi mdi-account-box-multiple text-info icon-lg',
        title: 'Employees',
        count: '246',
        innerIcon: 'mdi mdi-reload me-1',
        innerTxt: 'Product-wise sales'
    },
]

export const lineOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        y: {
            display: false,
            ticks: {
                beginAtZero: false
            }
        },
        x: {
            display: false
        }
    },
    plugins: {
        legend: {
            display: false
        },
    },
    elements: {
        point: {
            radius: 0
        },
        line: {
            tension: 0
        }
    },
    stepsize: 10
};

const totalInvoiceData = {
    labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
    datasets: [{
        label: 'Profit',
        data: [1, 3, 7, 4, 1, 9, 6],
        backgroundColor: [
            'rgba(182, 109, 255, .1 )',
        ],
        borderColor: [
            '#b66dff',
        ],
        borderWidth: 2,
        fill: true
    }]
}

const totalExpenseData = {
    labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
    datasets: [{
        label: 'Profit',
        data: [1, 4, 8, 3, 4, 6, 1],
        backgroundColor: [
            'rgba(255, 178, 66, .1)',
        ],
        borderColor: [
            '#ffc542',
        ],
        borderWidth: 2,
        fill: true
    }]
}

const totalunpaidInvoiceData = {
    labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
    datasets: [{
        label: 'Profit',
        data: [8, 12, 5, 4, 1, 12, 4],
        backgroundColor: [
            'rgba(0, 98, 255, .1)',
        ],
        borderColor: [
            '#0062ff',
        ],
        borderWidth: 2,
        fill: true
    }]
}

const totalAmountDueData = {
    labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
    datasets: [{
        label: 'Profit',
        data: [6, 9, 3, 4, 2, 5, 6],
        backgroundColor: [
            'rgba(252, 90, 90, .1)',
        ],
        borderColor: [
            '#fc5a5a',
        ],
        borderWidth: 2,
        fill: true
    }]
}

export const invoices = [
    {
        id: 1,
        title: 'Total Invoice',
        amount: '$65,560',
        amountChange: '+876',
        innerTxt: 'This has been a great',
        chartData: totalInvoiceData
    },
    {
        id: 2,
        title: 'Total Expenses',
        amount: '$65,560',
        amountChange: '-43',
        innerTxt: 'view statement',
        chartData: totalExpenseData
    },
    {
        id: 3,
        title: 'Unpaid Invoice',
        amount: '$2,540',
        amountChange: '+876',
        innerTxt: 'view history',
        chartData: totalunpaidInvoiceData
    },
    {
        id: 4,
        title: 'Amount Due',
        amount: '$3,450',
        amountChange: '+23',
        innerTxt: '65% lower growth',
        chartData: totalAmountDueData
    },
]

export const status = [
    {
        id: 1,
        icon: 'mdi mdi-account-multiple-outline text-primary me-2 me-sm-4 icon-lg',
        title: 'New Users',
        num: '65,650'
    },
    {
        id: 2,
        icon: 'mdi mdi-checkbox-marked-circle-outline text-primary me-2 me-sm-4 icon-lg',
        title: 'New Feedbacks',
        num: '32,604'
    },
    {
        id: 3,
        icon: 'mdi mdi-trophy-outline text-primary me-2 me-sm-4 icon-lg',
        title: 'Employees',
        num: '17,583'
    },
    {
        id: 4,
        icon: 'mdi mdi-target text-primary me-2 me-sm-4 icon-lg',
        title: 'Total Sales',
        num: '61,119'
    },

]

export const usersDoughnutChartData = {
    datasets: [{
        data: [80, 34, 100],
        backgroundColor: [
            '#44ce42',
            '#b66dff',
            '#d8d8d8',
        ],
        borderColor: [
            '#44ce42',
            '#b66dff',
            '#d8d8d8',
        ],
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
        'Pink',
        'Blue',
        'Yellow',
    ]
};

export const usersDoughnutChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
        animateScale: true,
        animateRotate: true
    },
    plugins: {
        legend: {
            display: false
        },
    },
};

export const amountDueBarData = {
    labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7", "Day 8", "Day 9", "Day 10"],
    datasets: [{
        label: 'Profit',
        data: [39, 19, 25, 16, 31, 39, 12, 18, 33, 24],
        backgroundColor: [
            '#198ae3', '#198ae3', '#198ae3', '#198ae3', '#198ae3', '#198ae3', '#198ae3', '#198ae3', '#198ae3', '#198ae3',
        ],
        borderColor: [
            '#198ae3', '#198ae3', '#198ae3', '#198ae3', '#198ae3', '#198ae3', '#198ae3', '#198ae3', '#198ae3', '#198ae3',
        ],
        borderWidth: 2,
        fill: true
    }]
};

export const amountDueBarOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        y: {
            display: false,
            ticks: {
                beginAtZero: false
            }
        },
        x: {
            display: false
        }
    },
    plugins: {
        legend: {
            display: false
        },
    },
    elements: {
        point: {
            radius: 0
        },
        line: {
            tension: 0
        }
    },
    stepsize: 10
};

export const profile = [
    {
        id: 1,
        img: '/images/faces/face11.jpg',
        name: 'Maria',
        email: 'maria@gmail.com',
        designation: 'Designer'
    },
    {
        id: 2,
        img: '/images/faces/face9.jpg',
        name: 'Thomas Edison',
        email: 'thomas@gmail.com',
        designation: 'Developer'
    },
    {
        id: 3,
        img: '/images/faces/face12.jpg',
        name: 'Edward',
        email: 'edward@gmail.com',
        designation: 'Tester'
    },
]

export const article = [
    {
        id: 1,
        img: '/images/dashboard/img_1.jpg',
        location: 'RAGNAROCK- Museet for pop, Roskilde, Denmark',
        title: 'It’s good to start or finish the day with delicious pancakes :)',
        date: 'Published on May 23, 2018',
        count: '93'
    },
    {
        id: 2,
        img: '/images/dashboard/img_2.jpg',
        location: 'RAGNAROCK- Museet for pop, Roskilde, Denmark',
        title: 'It’s good to start or finish the day with delicious pancakes :)',
        date: 'Published on May 23, 2018',
        count: '93'
    },
    {
        id: 3,
        img: '/images/dashboard/img_3.jpg',
        location: 'RAGNAROCK- Museet for pop, Roskilde, Denmark',
        title: 'It’s good to start or finish the day with delicious pancakes :)',
        date: 'Published on May 23, 2018',
        count: '93'
    },
]

export const finance = [
    {
        id: 1,
        style: 'absolute left top bottom h-100 v-strock-2 bg-success',
        title: 'Unpaid Invoices',
        amount: '$2,156',
        change: '−14.2%',
        dot: 'bg-success dot-indicator',
        innerTxt: 'This month unpaid invoices $567'
    },
    {
        id: 2,
        style: 'absolute left top bottom h-100 v-strock-2 bg-primary',
        title: 'Gross volume',
        amount: '$1,520',
        change: '+20.7%',
        dot: 'bg-primary dot-indicator',
        innerTxt: 'Next payout -23 aug- $233'
    },
    {
        id: 3,
        style: 'absolute left top bottom h-100 v-strock-2 bg-danger',
        title: 'Average revenue',
        amount: '$6.60',
        change: '+296.6%',
        dot: 'bg-danger dot-indicator',
        innerTxt: 'Payout for next week $100'
    },
]

export const reviews = [
    {
        id: 1,
        img: '/images/faces/face10.jpg',
        product: 'Air Pod',
        time: '08.34 AM',
        name: 'Christine',
        review: 'The brand apple is original !',
        rating: '1'
    },
    {
        id: 2,
        img: '/images/faces/face13.jpg',
        product: 'Macbook',
        time: '08.34 AM',
        name: 'Christine',
        review: 'The brand apple is original !',
        rating: '2'
    },
    {
        id: 3,
        img: '/images/faces/face1.jpg',
        product: 'Apple watch',
        time: '09.26 AM',
        name: 'James Tate',
        review: 'The brand apple is original.',
        rating: '3'
    },
    {
        id: 4,
        img: '/images/faces/face11.jpg',
        product: 'Homepod',
        time: '05.14 AM',
        name: 'Clyde Parker',
        review: 'The brand apple is original also the iphone !!',
        rating: '4'
    },
    {
        id: 5,
        img: '/images/faces/face12.jpg',
        product: 'Imac',
        time: '10.00 AM',
        name: 'James Tate',
        review: 'The brand apple is original.',
        rating: '5'
    },
]

export const activity = [
    {
        id: 1,
        img: '/images/faces/face4.jpg',
        name: 'Dobrick',
        status: 'That\'s awesome!',
        time: '2 hours ago',
    },
    {
        id: 2,
        img: '/images/faces/face5.jpg',
        name: 'Stella',
        status: 'That\'s awesome!',
        time: '3 hours ago',
    },
    {
        id: 3,
        img: '/images/faces/face7.jpg',
        name: 'Peter',
        status: 'That\'s awesome!',
        time: '1 hours ago',
    },
    {
        id: 4,
        img: '/images/faces/face6.jpg',
        name: 'Nateila',
        status: 'That\'s awesome!',
        time: '1 hours ago',
    },
]

export const recommended = [
    {
        id: 1,
        img: '/images/faces/face5.jpg',
        name: 'Stella Davidson',
        place: 'New York City, USA',
        icon: 'mdi mdi-check',
    },
    {
        id: 2,
        img: '/images/faces/face6.jpg',
        name: 'Daniel Russel',
        place: 'Florida, USA',
        icon: 'mdi mdi-plus',
    },
    {
        id: 3,
        img: '/images/faces/face7.jpg',
        name: 'Bruno King',
        place: 'Arkansas, USA',
        icon: 'mdi mdi-check',
    },
    {
        id: 4,
        img: '/images/faces/face8.jpg',
        name: 'David Moore',
        place: 'Arizon, USA',
        icon: 'mdi mdi-plus',
    },
    {
        id: 5,
        img: '/images/faces/face9.jpg',
        name: 'Rafell John',
        place: 'Alaska, USA',
        icon: 'mdi mdi-check',
    },
]