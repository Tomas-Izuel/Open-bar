export default class BaseManager {
  cconstructor(schemaDB) {
    this.schemaDB = schemaDB;
  }
  async getAll() {
    try {
      const data = await this.schemaDB.find().lean(); //El lean lo agregue porque sino handlebars no me dejaba representar las cosas
      return data;
    } catch (err) {
      return err.message;
    }
  }

  async getById(id) {
    try {
      const data = await this.schemaDB.findOne({ _id: id });
      return data;
    } catch (err) {
      console.log(err);
    }
  }

  async save(object) {
    try {
      const doc = await this.schemaDB.create(object);
      return doc;
    } catch (err) {
      console.log(err);
    }
  }

  async update(id, newObject) {
    try {
      const objetoBuscado = await this.getById(id);
      if (!objetoBuscado) {
        return false; //No encontrado
      } else {
        const data = await this.collection.findByIdAndUpdate(id, newObject);
        return data;
      }
    } catch (err) {
      console.log(err);
    }
  }

  async deleteById(id) {
    try {
      const objetoBuscado = await this.getById(id);
      if (!objetoBuscado) {
        return false; //No encontrado
      } else {
        await this.collection.findByIdAndDelete(id);
        return true; // Eliminado correctamente
      }
    } catch (err) {
      console.log(err);
    }
  }
}
