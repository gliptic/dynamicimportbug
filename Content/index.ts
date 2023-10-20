function doimport(name) {
    import(/* webpackMode: "lazy" */ `./${name}`).then(m => m.run());
}

doimport('a');