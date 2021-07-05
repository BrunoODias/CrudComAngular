using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GenericEFRepositories
{
    public interface IRepositoryEFC<TEntity>
    {
        public IEnumerable<TEntity> Get();
        public IEnumerable<TEntity> Get(Func<TEntity, bool> func);
        public void Add(TEntity obj);
        public void Add(IEnumerable<TEntity> obj);
        public void Update(TEntity obj);
        public void Update(IEnumerable<TEntity> obj);
        public void Remove(TEntity obj);
        public void Remove(Func<TEntity, bool> func);
    }
}
