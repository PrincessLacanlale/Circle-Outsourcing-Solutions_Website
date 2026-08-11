const header = document.getElementById('site-header');

function updateHeader() {
    if (window.scrollY > 40) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}
window.addEventListener('scroll', updateHeader);
updateHeader();

// Intersection Observer for fade-up
const faders = document.querySelectorAll('.fade-up');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });

faders.forEach(el => {
    el.style.animationPlayState = 'paused';
    observer.observe(el);
});

// ----- SERVICE DATA WITH IMAGES (12 services) -----
const services = [{
    id: 'customer-service',
    title: 'Customer Service',
    icon: 'teal',
    image: '../assets/Talking girl.png',
    shortDescription: 'Assists customers by resolving inquiries and ensuring a positive experience with strong English communication skills.',
    description: 'Our customer service associates interact with customers on behalf of your organization, focused entirely on the customer experience. Agents are fluent in spoken and written English so every interaction reflects a world class standard.',
    duties: [
        'Process orders and transactions',
        'Answer questions about your company\'s products or services',
        'Proactively reaching out to your customers for follow up',
        'Resolving issues',
        'Handling customer complaints',
        'Collecting customer feedback through inbound and outbound calls or emails',
        'Maintaining a customer portal',
        'Keeping up company documentation on websites or social media',
        'Escalating queries and concerns',
        'Ability to answer calls, chats, SMS, and emails'
    ],
    iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-user-star"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" /><path d="M6 21v-2a4 4 0 0 1 4 -4h.5" /><path d="M17.8 20.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138" /></svg>'
}, {
    id: 'virtual-assistant',
    title: 'Virtual Assistant',
    icon: 'orange',
    image: '../assets/Virtual Assistant.png',
    shortDescription: 'Provides remote administrative support such as scheduling, organization, and task management.',
    description: 'Our Virtual Assistants provide reliable administrative support tailored to your business needs. They are highly organized, fluent in spoken and written English, tech-savvy, and committed to delivering efficient, professional service on your schedule.',
    duties: [
        'Schedule Appointments',
        'Answer emails and phone calls',
        'Make Travel Arrangements',
        'Make light cold calls to help generate leads',
        'Social Media posts to company websites',
        'Keep up company newsletter',
        'Help prepare presentations on various projects',
        'Manage Change Management documents',
        'Data Entry'
    ],
    iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-heart-handshake"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" /><path d="M12 6l-3.293 3.293a1 1 0 0 0 0 1.414l.543 .543c.69 .69 1.81 .69 2.5 0l1 -1a3.182 3.182 0 0 1 4.5 0l2.25 2.25" /><path d="M12.5 15.5l2 2" /><path d="M15 13l2 2" /></svg>'
}, {
    id: 'it-support',
    title: 'IT Support',
    icon: 'orange',
    image: '../assets/IT Support.png',
    shortDescription: 'Maintains systems, installs updates, troubleshoots issues, and supports internal technical operations.',
    description: 'Our IT Support Specialists keep your systems running smoothly by providing reliable technical support, software maintenance, troubleshooting, and system monitoring. They adapt to your internal processes, work within your ticketing system, and deliver responsive service focused on efficiency and user satisfaction.',
    duties: [
        'Assist in calls or chat with technical difficulties',
        'Monitor end points and servers for abnormal activity',
        'Software updates and patches',
        'Record all information into ticketing system',
        'Office 365 Support',
        'Maintain all working components of the company assets',
        'Access and connectivity issues',
        'Proprietary or 3rd party application support'
    ],
    iconSvg: '<svg viewBox="0 0 24 24"><rect x="4" y="3" width="16" height="12" rx="1"/><path d="M2 19h20M9 19l1-4h4l1 4"/></svg>'
}, {
    id: 'lead-generation',
    title: 'Lead Generation Specialist',
    icon: 'teal',
    image: '../assets/Lead Generation Specialist.png',
    shortDescription: 'Finds and qualifies potential customers to support sales and business growth.',
    description: 'Our Lead Generation Specialists identify, qualify, and generate high-quality sales leads to support your business growth. They work seamlessly within your CRM, delivering effective outreach and helping your sales team build stronger customer relationships and achieve revenue goals.',
    duties: [
        'Outbound Lead Generation',
        'LinkedIn Lead Generation',
        'Tech Touch customers that may be too small for day-to-day account management',
        'Cold Calls',
        'Responding to Direct Mail',
        'Website Newsletter and form call backs',
        'Loyalty Programs initiation and follow up',
        'Filter existing company lead',
        'Lead Qualifications'
    ],
    iconSvg: '<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>'
}, {
    id: 'data-entry',
    title: 'Data Entry Specialist',
    icon: 'teal',
    image: '../assets/Data Entry Specialist.png',
    shortDescription: 'Accurately inputs, updates, and manages data across systems and reports.',
    description: 'Our Data Entry Specialists ensure accurate and efficient data management by updating databases, digitizing records, and generating reports. They are detail-oriented, highly organized, and committed to delivering reliable results with excellent customer service.',
    duties: [
        'Collect information from customers, clients and vendors',
        'Indexing and Filing Invoices',
        'Retrieving data',
        'Transferring physical records into a digital database',
        'Maintaining and updating company central database',
        'Catalog data with appropriate tags for ease of reference',
        'Data Management'
    ],
    iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-chart-pie"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M10 3.2a9 9 0 1 0 10.8 10.8a1 1 0 0 0 -1 -1h-6.8a2 2 0 0 1 -2 -2v-7a.9 .9 0 0 0 -1 -.8" /><path d="M15 3.5a9 9 0 0 1 5.5 5.5h-4.5a1 1 0 0 1 -1 -1v-4.5" /></svg>'
}, {
    id: 'medical-coding',
    title: 'Medical Coding',
    icon: 'orange',
    image: '../assets/Medical Coding.png',
    shortDescription: 'Converts medical records into standardized codes for billing and insurance processing.',
    description: 'Our Medical Coders accurately review medical records, assign codes, and process insurance claims for timely reimbursement. They are highly skilled in medical terminology, anatomy, and coding standards, with strong communication, typing, and organizational abilities.',
    duties: [
        'Diagnose events that may lead to negligence and malpractice',
        'Collect information by the physician from different sources to prepare reports',
        'Clarify and follow up any information that is not clear to other staff members',
        'Reviewing patient charts and documents to verify for accuracy',
        'Comply with all medical coding guidelines and policies',
        'Ensuring that codes are assigned correctly and sequenced appropriately',
        'Interpret patient files and manually update them with proper codes',
        'Validate coding choices and argue against any possible wrongfully denied claims'
    ],
    iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-files"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M15 3v4a1 1 0 0 0 1 1h4" /><path d="M18 17h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h4l5 5v7a2 2 0 0 1 -2 2" /><path d="M16 17v2a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h2" /></svg>'
}, {
    id: 'help-desk',
    title: 'Help Desk Technician',
    icon: 'orange',
    image: '../assets/Help Desk Support.png',
    shortDescription: 'Accurately inputs, updates, and manages data across systems and reports.',
    description: 'Our Help Desk Support team provides reliable technical assistance for desktops, software, and hardware. They adapt to your ticketing systems and workflows, delivering fast, effective solutions with a strong focus on customer satisfaction.',
    duties: [
        'Desktop applications issues',
        'Assist in calls or chats with technical difficulties',
        'Monitor end points',
        'Software updates and patches',
        'Record all information into ticketing system',
        'Office 365 Support',
        'Take ownership trouble tickets while working them to completion',
        'Access and connectivity issues',
        'Proprietary or 3rd party application support'
    ],
    iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-settings"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065" /><path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /></svg>'
}, {
    id: 'admin-specialist',
    title: 'Admin Specialist',
    icon: 'teal',
    image: '../assets/Admin Specialist.png',
    shortDescription: 'Delivers organized and efficient administrative support for daily business operations.',
    description: 'Our Admin Specialists provide reliable administrative support to keep your business organized and running efficiently. They are detail-oriented, fluent in written and spoken English, and adapt seamlessly to your tools, systems, and workflows.',
    duties: [
        'Calendar, email, and inbox management',
        'Appointment scheduling and coordination',
        'Travel planning and itinerary preparation',
        'Document preparation and presentation support',
        'Data entry and records maintenance',
        'Handling routine calls and correspondence'
    ],
    iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-list-details"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M13 5h8" /><path d="M13 9h5" /><path d="M13 15h8" /><path d="M13 19h5" /><path d="M3 5a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -4" /><path d="M3 15a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -4" /></svg>'
}, {
    id: 'back-office',
    title: 'Back Office Support',
    icon: 'teal',
    image: '../assets/Back Office Support.png',
    shortDescription: 'Handles administrative and data tasks to support front-office operations.',
    description: 'Our Back Office Support team provides reliable administrative support, data management, and data entry services to keep your operations running efficiently. They work seamlessly with your front office, delivering accurate, timely support while maintaining professional communication and service standards.',
    duties: [
        'Company content creation',
        'Digital Marketing',
        'Web Maintenance',
        'Catalog and company document management',
        'Lead Management',
        'Data Management',
        'Data Entry',
        'Database Maintenance'
    ],
    iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-folder"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2" /></svg>'
}, {
    id: 'payroll',
    title: 'Payroll Specialist',
    icon: 'orange',
    image: '../assets/Payroll Specialist.png',
    shortDescription: 'Manages payroll processing, reporting, and employee payroll support with accuracy.',
    description: 'Our Payroll Specialists provide accurate and timely payroll processing, ensuring compliance while handling payroll calculations, reporting, and employee inquiries. They deliver reliable support so your team can stay focused on core business operations.',
    duties: [
        'Gross-to-net payroll computation',
        'Attendance, OT, and leave-based pay calculations',
        'Payslip generation and payroll reporting',
        '13th month pay and year-end annualization',
        'Onboarding, offboarding, and final pay processing',
        'Payroll inquiries and employee support'
    ],
    iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-clipboard-list"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" /><path d="M9 5a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2" /><path d="M9 12l.01 0" /><path d="M13 12l2 0" /><path d="M9 16l.01 0" /><path d="M13 16l2 0" /></svg>'
}];

// ----- RENDER SERVICE CARDS -----
const grid = document.getElementById('servicesGrid');
services.forEach((service, index) => {
    const card = document.createElement('div');
    card.className = `service-card fade-up`;
    card.style.animationDelay = `${index * 0.05}s`;
    card.innerHTML = `
        <div class="icon-wrap ${service.icon === 'teal' ? 'teal-bg' : 'orange-bg'}">
            ${service.iconSvg}
        </div>
        <h3>${service.title}</h3>
        <p>${service.shortDescription}</p>
        <span class="click-hint">Click for details →</span>
    `;
    card.addEventListener('click', () => openModal(service.id));
    grid.appendChild(card);
});

// ----- MODAL FUNCTIONS -----
const modal = document.getElementById('serviceModal');
const modalContent = document.getElementById('modalContent');
const closeBtn = document.getElementById('closeModal');

function openModal(id) {
    const service = services.find(s => s.id === id);
    if (!service) return;

    const dutiesHtml = service.duties.map(d => `<li>${d}</li>`).join('');

    modalContent.innerHTML = `
        <div class="modal-grid">
            <div class="modal-left">
                <div class="modal-icon ${service.icon === 'teal' ? 'teal-bg' : 'orange-bg'}">
                    ${service.iconSvg}
                </div>
                <h2>${service.title}</h2>
                <div class="modal-description">${service.description}</div>
                <div class="modal-image">
                    <img src="${service.image}" alt="${service.title}" onerror="this.src='WEBSITE PICS/3 People.png'">
                </div>
            </div>
            <div class="modal-right">
                <div class="duties-title">Examples of Duties and Responsibilities</div>
                <ul class="duties-list">${dutiesHtml}</ul>
            </div>
        </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

closeBtn.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
});
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});

// ----- TRACK RECORD TABS -----
const tabs = document.querySelectorAll('.track-tab');
const contents = document.querySelectorAll('.track-content');

tabs.forEach(tab => {
    tab.addEventListener('click', function() {
        tabs.forEach(t => t.classList.remove('active'));
        this.classList.add('active');

        contents.forEach(c => c.classList.remove('active'));

        const target = document.getElementById(this.dataset.target);
        if (target) target.classList.add('active');
    });
});

