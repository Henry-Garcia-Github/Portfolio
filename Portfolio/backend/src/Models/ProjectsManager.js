class ProjectsManager {
    
  constructor({ table }) {
      this.table = table;
      this.database = null;
  }

  findAll() {
      return this.database.query(`SELECT * FROM ${this.table}`);
  }

  findById(id) {
      return this.database.query(
          `SELECT * FROM ${this.table} WHERE id = ?`,
          [id]
      );
  }

  create(project) {
    return this.database.query(
        `INSERT INTO ${this.table}(name, logo, main_photo, secondary_photo, third_photo, description) VALUES (?, ?, ?, ?, ?, ?)`,
        [project.name, project.logo, project.main_photo, project.secondary_photo, project.third_photo, project.description]
    );
}


  update(id, project) {
      return this.database.query(
          `UPDATE ${this.table} SET name = ?, logo = ?, main_photo = ?, secondary_photo = ?, third_photo = ?, description = ? WHERE id = ?`,
          [project.name, project.logo, project.main_photo, project.secondary_photo, project.third_photo, project.description, id]
      );
  }

  delete(id) {
      return this.database.query(
          `DELETE FROM ${this.table} WHERE id = ?`,
          [id]
      );
  }

  setDatabase(database) {
      this.database = database;
  }
}

module.exports = ProjectsManager;
