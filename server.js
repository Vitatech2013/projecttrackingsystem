const express = require('express')
const app = express()
const port = 4567;

app.get('/', index);
app.get('/adminlogin', adminLogin);
app.get('/pmlogin', pmLogin);
app.get('/tllogin', tlLogin);
app.get('/devlogin', devLogin);

app.get('/admin', admin);
app.get('/projectmanagar', projectManagar);
app.get('/teamleader', teamLeader);
app.get('/developer', developer);

app.get('/admin/registration', admin_registration);
app.get('/admin/viewemp', admin_viewEmp);
app.get('/admin/addproject', admin_addProject);
app.get('/admin/viewprojects', admin_viewProjects);
app.get('/admin/changepwd', admin_changepwd);

app.get('/pm/profile', pm_profile);
app.get('/pm/viewemp', pm_viewEmp);
app.get('/pm/addmodule', pm_addModule);
app.get('/pm/viewmodule', pm_viewModule);
app.get('/pm/viewprojects', pm_viewProjects);
app.get('/pm/changepwd', pm_changepwd);

app.get('/tl/profile', tl_profile);
app.get('/tl/viewemp', tl_viewEmp);
app.get('/tl/addtask', tl_addTask);
app.get('/tl/viewtask', tl_viewTask);
app.get('/tl/viewmodules', tl_viewModules);
app.get('/tl/changepwd', tl_changepwd);

app.get('/dev/profile', dev_profile);
app.get('/dev/viewtask', dev_viewtask);
app.get('/dev/changepwd', dev_changepwd);

function index(req, res) {
	res.sendFile("./index.html", {root:__dirname});
}

function adminLogin(req, res) {
	res.sendFile("./admin.html", {root:__dirname});
}

function pmLogin(req, res) {
	res.sendFile("./project_manager.html", {root:__dirname});
}

function tlLogin(req, res) {
	res.sendFile("./team_leader.html", {root:__dirname});
}

function devLogin(req, res) {
	res.sendFile("./developer.html", {root:__dirname});
}

function admin(req, res) {
	res.sendFile("Admin/home.html", {root:__dirname});
}

function admin_registration(req, res) {
	res.sendFile("Admin/registration.html", {root:__dirname});
}

function admin_viewEmp(req, res) {
	res.sendFile("Admin/view_employees.html", {root:__dirname});
}

function admin_addProject(req, res) {
	res.sendFile("Admin/add_project.html", {root:__dirname});
}

function admin_viewProjects(req, res) {
	res.sendFile("Admin/view_projects.html", {root:__dirname});
}

function admin_changepwd(req, res) {
	res.sendFile("Admin/changePassword.html", {root:__dirname});
}

function projectManagar(req, res) {
	res.sendFile("Project Manager/home.html", {root:__dirname});
}

function pm_profile(req, res) {
	res.sendFile("Project Manager/profile.html", {root:__dirname});
}

function pm_viewEmp(req, res) {
	res.sendFile("Project Manager/view_employees.html", {root:__dirname});
}

function pm_addModule(req, res) {
	res.sendFile("Project Manager/add_module.html", {root:__dirname});
}

function pm_viewModule(req, res) {
	res.sendFile("Project Manager/view_module.html", {root:__dirname});
}

function pm_viewProjects(req, res) {
	res.sendFile("Project Manager/view_projects.html", {root:__dirname});
}

function pm_changepwd(req, res) {
	res.sendFile("Project Manager/changePassword.html", {root:__dirname});
}

function teamLeader(req, res) {
	res.sendFile("Team Leader/home.html", {root:__dirname});
}

function tl_profile(req, res) {
	res.sendFile("Team Leader/profile.html", {root:__dirname});
}

function tl_viewEmp(req, res) {
	res.sendFile("Team Leader/view_employees.html", {root:__dirname});
}

function tl_addTask(req, res) {
	res.sendFile("Team Leader/add_task.html", {root:__dirname});
}

function tl_viewTask(req, res) {
	res.sendFile("Team Leader/view_task.html", {root:__dirname});
}

function tl_viewModules(req, res) {
	res.sendFile("Team Leader/view_module.html", {root:__dirname});
}

function tl_changepwd(req, res) {
	res.sendFile("Team Leader/changePassword.html", {root:__dirname});
}

function developer(req, res) {
	res.sendFile("Developer/home.html", {root:__dirname});
}

function dev_profile(req, res) {
	res.sendFile("Developer/profile.html", {root:__dirname});
}

function dev_viewtask(req, res) {
	res.sendFile("Developer/view_task.html", {root:__dirname});
}

function dev_changepwd(req, res) {
	res.sendFile("Developer/changePassword.html", {root:__dirname});
}

app.listen(port, () => console.log(`Server Started on ${port} Port Number`))
