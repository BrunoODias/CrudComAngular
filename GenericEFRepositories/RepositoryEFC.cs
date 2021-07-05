using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GenericEFRepositories
{
    public class RepositoryEFC<TEntity> : IRepositoryEFC<TEntity> where TEntity : class
    {
        private readonly DbContext dbContext;
        private readonly DbSet<TEntity> entity;

        public RepositoryEFC(DbContext dbContext)
        {
            this.dbContext = dbContext;
            this.entity = dbContext.Set<TEntity>();
        }

        public void Add(TEntity obj)
        {
            entity.Add(obj);
            SaveChanges();
        }

        public void Add(IEnumerable<TEntity> obj)
        {
            entity.AddRange(obj);
            SaveChanges();
        }

        public IEnumerable<TEntity> Get()
        {
            return entity.ToList();
        }

        public IEnumerable<TEntity> Get(Func<TEntity, bool> func)
        {
            return entity.Where(func);
        }

        public void Remove(TEntity obj)
        {
            entity.Remove(obj);
            SaveChanges();
        }

        public void Remove(Func<TEntity, bool> func)
        {
            var objs = Get(func);
            foreach (var current in objs)
            {
                entity.Remove(current);
            }
            SaveChanges();
        }

        public void Update(TEntity obj)
        {
            entity.Update(obj);
            SaveChanges();
        }
        

        public void Update(IEnumerable<TEntity> obj)
        {
            foreach(var current in obj)
                entity.Update(current);
            
            SaveChanges();
        }

        private void SaveChanges()
        {
            dbContext.SaveChanges();
        }            
    }
}