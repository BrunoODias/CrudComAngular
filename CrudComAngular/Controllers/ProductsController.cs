using CrudComAngular.Models;
using Microsoft.AspNetCore.Mvc;
using GenericEFRepositories;
using System.Collections.Generic;
using System;
using Newtonsoft.Json;

namespace CrudComAngular.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class ProductsController : CustomControllerBase
    {
        public IRepositoryEFC<Product> Repository { get; }
     
        public ProductsController(IRepositoryEFC<Product> repository)
        {
            Repository = repository;
        }

        [HttpGet]
        public IActionResult Products(string param) {
            try
            {
                IEnumerable<Product> date;
                if (string.IsNullOrWhiteSpace(param))
                    date = Repository.Get();
                else
                    date = Repository.Get(p=>p.Name.ToLower().Contains(param.ToLower().Trim()));
                return Ok(date);
            }
            catch (Exception)
            {
                return Error("Houve um erro ao trazer os dados");
            }
        }

        [HttpPost]
        public IActionResult Add(Product product)
        {
            try
            {
                Repository.Add(product);
                return Ok();
            }
            catch (Exception)
            {
                return Error("Houve um erro ao adicionar o produto");
            }
        }

        [HttpPut]
        public IActionResult Edit(Product product)
        {
            try
            {
                Repository.Update(product);
                return Ok();
            }
            catch (Exception e)
            {
                return Error("Houve um erro ao editar o produto selecionado");
            }
        }

        [HttpDelete]
        public IActionResult Delete(int productID)
        {
            try
            {
                Repository.Remove(p => p.ProductID == productID);
                return Ok();
            }
            catch (Exception)
            {
                return Error("Houve um erro ao excluir o produto selecionado");
            }
        }
    }
}