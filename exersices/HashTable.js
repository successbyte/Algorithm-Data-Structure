class HashTable {
  constructor(size = 7) {
    this.dataMap = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length;
    }
    return hash;
  }

  set(key, value) {
    let index = this._hash(key);
    if (!this.dataMap[index]) this.dataMap[index] = [];

    this.dataMap[index].push([key, value]);
    return this;
  }

  get(key) {
    let index = this._hash(key);
    if (this.dataMap[index]) {
      for (let item of this.dataMap[index]) {
        if (item[0] === key) return item[1];
      }
    }
    return undefined;
  }

  keys() {
    let allKeys = [];
    for (const item of this.dataMap) {
      if (item) {
        for (const element of item) {
          allKeys.push(element[0]);
        }
      }
    }
    return allKeys;
  }
}

let myHashTable = new HashTable();
myHashTable.set("frontDevs", 4);
console.log(myHashTable);
